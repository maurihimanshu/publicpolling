import { createContext, useContext, useState, useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    updateProfile
} from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext({});

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('[Public-Viewer] AuthProvider initializing...');

        // Listen for auth state from shell
        const handleMessage = (event) => {
            // Verify origin (shell is on port 3000 in dev, or same origin in prod)
            const allowedOrigins = ['http://localhost:3000', window.location.origin];
            if (!allowedOrigins.includes(event.origin) && event.origin !== 'https://maurihimanshu.github.io') return;

            if (event.data?.type === 'AUTH_STATE') {
                console.log('[Public-Viewer] Received AUTH_STATE:', event.data.user);
                setUser(event.data.user);
                setLoading(false);
            }
        };

        window.addEventListener('message', handleMessage);

        // Request auth state from shell (Handshake)
        console.log('[Public-Viewer] Sending AUTH_REQUEST to shell');
        try {
            // Target * because we just want to wake up the parent, no sensitive data sent
            window.parent.postMessage({ type: 'AUTH_REQUEST' }, '*');
        } catch (e) {
            console.warn('[Public-Viewer] Failed to post message to parent:', e);
        }

        // Allow direct Firebase login as fallback
        const firebaseUnsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser && !user) {
                console.log('[Public-Viewer] Firebase auth detected:', firebaseUser.email);
                setUser(firebaseUser);
                setLoading(false);
            }
        });

        // Timeout to stop loading if no auth received
        const timeout = setTimeout(() => {
            if (loading) setLoading(false);
        }, 3000);

        return () => {
            window.removeEventListener('message', handleMessage);
            firebaseUnsubscribe();
            clearTimeout(timeout);
        };
    }, []);

    const signIn = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return { success: true, user: result.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const signUp = async (email, password, displayName) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            if (displayName) {
                await updateProfile(result.user, { displayName });
            }
            return { success: true, user: result.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            return { success: true, user: result.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const signInWithGithub = async () => {
        try {
            const provider = new GithubAuthProvider();
            const result = await signInWithPopup(auth, provider);
            return { success: true, user: result.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const value = {
        user,
        loading,
        signIn,
        signUp,
        signInWithGoogle,
        signInWithGithub,
        signOut
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
