import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { saveAuthToStorage } from '../utils/authSync';
import './Header.css';

const Header = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Ensure auth is saved to localStorage (fallback)
    useEffect(() => {
        console.log('[Header] User changed:', user ? user.email : 'null');
        if (user) {
            saveAuthToStorage(user);
        }
    }, [user]);

    const handleSignOut = async () => {
        const result = await signOut();
        if (result.success) {
            navigate('/');
        }
    };

    const isActive = (path) => location.pathname === path;

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <span className="logo-icon">🎬</span>
                    <span className="logo-text">Entertainment Hub</span>
                </Link>

                <nav className="nav">
                    <Link
                        to="/browse"
                        className={`nav-link ${isActive('/browse') ? 'active' : ''}`}
                    >
                        Browse
                    </Link>

                    {user && (
                        <Link
                            to="/manage"
                            className={`nav-link ${isActive('/manage') ? 'active' : ''}`}
                        >
                            My Content
                        </Link>
                    )}

                    <div className="nav-actions">
                        {user ? (
                            <div className="user-menu">
                                <div className="user-info">
                                    <span className="user-avatar">
                                        {user.photoURL ? (
                                            <img src={user.photoURL} alt={user.displayName} />
                                        ) : (
                                            user.displayName?.[0] || user.email?.[0] || '👤'
                                        )}
                                    </span>
                                    <span className="user-name">{user.displayName || user.email}</span>
                                </div>
                                <button className="btn btn-secondary btn-sm" onClick={handleSignOut}>
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" className="btn btn-primary btn-sm">
                                Sign In
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
