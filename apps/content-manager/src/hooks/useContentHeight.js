import { useEffect } from 'react';

export const useContentHeight = () => {
    useEffect(() => {
        let lastHeight = 0;

        const sendHeight = () => {
            const root = document.getElementById('root') || document.body.firstElementChild;
            if (!root) return;

            const height = root.scrollHeight;

            if (height > 0 && Math.abs(height - lastHeight) > 15) {
                lastHeight = height;
                window.parent.postMessage({ type: 'RESIZE', height }, '*');
            }
        };

        sendHeight();

        const resizeObserver = new ResizeObserver(() => {
            sendHeight();
        });

        const root = document.getElementById('root');
        if (root) {
            resizeObserver.observe(root);
        } else {
            resizeObserver.observe(document.body);
        }

        const mutationObserver = new MutationObserver(() => {
            sendHeight();
        });

        mutationObserver.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true
        });

        const interval = setInterval(sendHeight, 1000);

        return () => {
            resizeObserver.disconnect();
            mutationObserver.disconnect();
            clearInterval(interval);
        };
    }, []);
};
