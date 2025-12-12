import { useEffect } from 'react';

export const useContentHeight = () => {
    useEffect(() => {
        let lastHeight = 0;

        const sendHeight = () => {
            // Measure #root instead of body/html to avoid tracking viewport/iframe height
            const root = document.getElementById('root') || document.body.firstElementChild;
            if (!root) return;

            const height = root.scrollHeight;

            // Debounce threshold 15px
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

        // Keep mutation observer on body to catch portals/overlays
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
