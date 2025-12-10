// Shared authentication utilities for micro-frontends
// This file should be copied to all three apps

const AUTH_STORAGE_KEY = 'entertainment_hub_auth';
const AUTH_EVENT = 'auth_state_changed';

export const saveAuthToStorage = (user) => {
    console.log('[authSync] saveAuthToStorage called with:', user ? user.email : 'null');
    if (user) {
        const authData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            timestamp: Date.now()
        };
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
        console.log('[authSync] Saved to localStorage:', authData);
        // Trigger event for other tabs/iframes
        window.dispatchEvent(new CustomEvent(AUTH_EVENT, { detail: authData }));
        console.log('[authSync] Dispatched event');
    } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        console.log('[authSync] Cleared localStorage');
        window.dispatchEvent(new CustomEvent(AUTH_EVENT, { detail: null }));
    }
};

export const getAuthFromStorage = () => {
    try {
        const data = localStorage.getItem(AUTH_STORAGE_KEY);
        console.log('[authSync] getAuthFromStorage - raw data:', data);
        if (!data) return null;

        const authData = JSON.parse(data);
        // Check if data is less than 1 hour old
        if (Date.now() - authData.timestamp > 3600000) {
            console.log('[authSync] Data expired, clearing');
            localStorage.removeItem(AUTH_STORAGE_KEY);
            return null;
        }
        console.log('[authSync] Returning auth data:', authData.email);
        return authData;
    } catch (error) {
        console.error('[authSync] Error reading auth from storage:', error);
        return null;
    }
};

export const listenToAuthChanges = (callback) => {
    const handler = (event) => {
        callback(event.detail);
    };
    window.addEventListener(AUTH_EVENT, handler);

    // Also listen to storage events (for cross-tab sync)
    const storageHandler = (event) => {
        if (event.key === AUTH_STORAGE_KEY) {
            const authData = event.newValue ? JSON.parse(event.newValue) : null;
            callback(authData);
        }
    };
    window.addEventListener('storage', storageHandler);

    return () => {
        window.removeEventListener(AUTH_EVENT, handler);
        window.removeEventListener('storage', storageHandler);
    };
};
