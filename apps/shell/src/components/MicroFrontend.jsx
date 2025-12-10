import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './MicroFrontend.css';

const MicroFrontend = ({ name, host }) => {
    const iframeRef = useRef(null);
    const { user } = useAuth();
    const location = useLocation();

    useEffect(() => {
        // Send auth state to micro-frontend
        const sendAuthState = () => {
            if (iframeRef.current && iframeRef.current.contentWindow) {
                console.log(`[Shell] Sending AUTH_STATE to ${name} (${host})`);
                try {
                    iframeRef.current.contentWindow.postMessage({
                        type: 'AUTH_STATE',
                        user: user ? {
                            uid: user.uid,
                            email: user.email,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        } : null
                    }, host);
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
        const handleMessage = (event) => {
            if (event.origin !== host) return; // Security check

            if (event.data?.type === 'AUTH_REQUEST') {
                console.log(`[Shell] Received AUTH_REQUEST from ${name}`);
                sendAuthState();
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
