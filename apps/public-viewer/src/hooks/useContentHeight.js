import { useEffect, useRef } from 'react';

export const useContentHeight = () => {
    useEffect(() => {
        const sendHeight = () => {
            // Get height - use scrollHeight or offsetHeight
            // We want the total scrollable height
            const height = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight
            );

            // Only send if valid
            if (height > 0) {
                // Send to parent (Shell)
                // Use '*' for simplicity as we are in a trusted MF environment (or restrict to shell origin)
                window.parent.postMessage({ type: 'RESIZE', height }, '*');
            }
        };

        // Send initially and on window resize
        sendHeight();
        window.addEventListener('resize', sendHeight);

        // Observer for DOM mutations/size changes
        const resizeObserver = new ResizeObserver((entries) => {
            sendHeight();
        });

        resizeObserver.observe(document.body);
        // Also observe the root element in case body doesn't stretch
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
