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
import { saveAuthToStorage } from '../utils/authSync';

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
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('[Shell] Auth state changed:', user ? user.email : 'null');
            setUser(user);
            setLoading(false);
            // Save auth state to localStorage for micro-frontends
            saveAuthToStorage(user);
            console.log('[Shell] Saved to storage:', user ? 'yes' : 'cleared');
        });

        return unsubscribe;
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
