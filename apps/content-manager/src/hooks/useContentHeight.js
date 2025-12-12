import { useEffect } from 'react';

export const useContentHeight = () => {
    useEffect(() => {
        const sendHeight = () => {
            const height = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight
            );

            if (height > 0) {
                window.parent.postMessage({ type: 'RESIZE', height }, '*');
            }
        };

        sendHeight();
        window.addEventListener('resize', sendHeight);

        const resizeObserver = new ResizeObserver(() => {
            sendHeight();
        });

        resizeObserver.observe(document.body);
        const root = document.getElementById('root');
        if (root) resizeObserver.observe(root);

        const mutationObserver = new MutationObserver(() => {
            sendHeight();
        });

        mutationObserver.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true
        });

        return () => {
            window.removeEventListener('resize', sendHeight);
            resizeObserver.disconnect();
            mutationObserver.disconnect();
        };
    }, []);
};
