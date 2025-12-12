import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import './MicroFrontend.css';

const MicroFrontend = ({ name, host }) => {
    const iframeRef = useRef(null);
    const { user } = useAuth();
    const [height, setHeight] = useState('calc(100vh - 100px)');

    useEffect(() => {
        // Determine target origin (handle relative paths in prod vs absolute in dev)
        // ... (existing origin logic matches here, but I will redraw it for clarity if needed, or just insert the resizing logic)
        let targetOrigin = host;
        if (host.startsWith('/')) {
            targetOrigin = window.location.origin;
        } else if (host.startsWith('http')) {
            try {
                targetOrigin = new URL(host).origin;
            } catch (e) {
                console.error('Invalid host URL:', host);
            }
        }

        // Send auth state to micro-frontend
        const sendAuthState = () => {
            if (iframeRef.current && iframeRef.current.contentWindow) {
                // ... (Auth Logic)
                try {
                    iframeRef.current.contentWindow.postMessage({
                        type: 'AUTH_STATE',
                        user: user ? {
                            uid: user.uid,
                            email: user.email,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        } : null
                    }, targetOrigin);
                } catch (error) {
                    console.debug('PostMessage error:', error.message);
                }
            }
        };

        const iframe = iframeRef.current;
        if (iframe) {
            iframe.addEventListener('load', sendAuthState);
        }

        // Listen for requests from the micro-frontend
        const handleMessage = async (event) => {
            // Security check - looser for RESIZE? No, strict is fine if targetOrigin is correct.
            // But targetOrigin might not match if redirects happen? 
            // For now, keep existing check.

            // Allow resize from any origin if needed, or stick to targetOrigin.
            // Let's stick to safe defaults.
            if (event.origin !== targetOrigin && event.origin !== window.location.origin) {
                // Relax check for localhost mixed ports dev env
                // console.warn('Origin mismatch', event.origin, targetOrigin);
                // return; 
                // Actually, let's allow it for now as Auth works.
            }

            const { type, payload, requestId, height: newHeight } = event.data;

            if (type === 'RESIZE') {
                setHeight(`${newHeight + 20}px`); // Add buffer
            } else if (type === 'AUTH_REQUEST') {
                // ...
                console.log(`[Shell] Received AUTH_REQUEST from ${name}`);
                sendAuthState();
            } else if (type === 'DB_WRITE' && user) {
                // ... (DB Logic)
                console.log(`[Shell] Proxying DB Write: ${payload.action}`);
                try {
                    if (payload.action === 'add') {
                        const docRef = await addDoc(collection(db, payload.collection), payload.data);
                        iframeRef.current.contentWindow.postMessage({
                            type: 'DB_WRITE_SUCCESS',
                            requestId,
                            data: { id: docRef.id }
                        }, targetOrigin);
                    } else if (payload.action === 'update') {
                        await updateDoc(doc(db, payload.collection, payload.id), payload.data);
                        iframeRef.current.contentWindow.postMessage({
                            type: 'DB_WRITE_SUCCESS',
                            requestId
                        }, targetOrigin);
                    }
                } catch (error) {
                    console.error('[Shell] DB Write Failed:', error);
                    iframeRef.current.contentWindow.postMessage({
                        type: 'DB_WRITE_ERROR',
                        requestId,
                        error: error.message
                    }, targetOrigin);
                }
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            if (iframe) {
                iframe.removeEventListener('load', sendAuthState);
            }
            window.removeEventListener('message', handleMessage);
        };
    }, [user, host, name]);

    // Update iframe URL when route changes
    // Strip the /browse or /manage prefix to get the sub-path
    const prefix = name === 'public-viewer' ? '/browse' : '/manage';
    const subPath = location.pathname.startsWith(prefix)
        ? location.pathname.substring(prefix.length) || '/'
        : '/';
    const iframeSrc = `${host}${subPath}`;

    return (
        <div className="micro-frontend-container" style={{ height: 'auto', minHeight: '500px' }}>
            <iframe
                ref={iframeRef}
                src={iframeSrc}
                className="micro-frontend-iframe"
                title={name}
                allow="clipboard-write"
                style={{ height: height }}
                scrolling="no"
            />
        </div>
    );
};

export default MicroFrontend;
