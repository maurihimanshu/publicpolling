import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import './MicroFrontend.css';

const MicroFrontend = ({ name, host }) => {
    const iframeRef = useRef(null);
    const { user } = useAuth();
    const location = useLocation();

    useEffect(() => {
        // Determine target origin (handle relative paths in prod vs absolute in dev)
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
                console.log(`[Shell] Sending AUTH_STATE to ${name} (${targetOrigin})`);
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
            sendAuthState();
        }

        // Listen for requests from the micro-frontend
        const handleMessage = async (event) => {
            if (event.origin !== targetOrigin) return; // Security check

            const { type, payload, requestId } = event.data;

            if (type === 'AUTH_REQUEST') {
                console.log(`[Shell] Received AUTH_REQUEST from ${name}`);
                sendAuthState();
            } else if (type === 'DB_WRITE' && user) {
                // Handle proxied database writes
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
        <div className="micro-frontend-container">
            <iframe
                ref={iframeRef}
                src={iframeSrc}
                className="micro-frontend-iframe"
                title={name}
                allow="clipboard-write"
            />
        </div>
    );
};

export default MicroFrontend;
