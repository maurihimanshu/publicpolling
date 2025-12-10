import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn, signInWithGoogle, signInWithGithub } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await signIn(email, password);

        if (result.success) {
            navigate('/manage');
        } else {
            setError(result.error);
        }

        setLoading(false);
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setLoading(true);
        const result = await signInWithGoogle();
        if (result.success) {
            navigate('/manage');
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    const handleGithubSignIn = async () => {
        setError('');
        setLoading(true);
        const result = await signInWithGithub();
        if (result.success) {
            navigate('/manage');
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-card">
                    <h2 className="auth-title">Welcome Back</h2>
                    <p className="auth-subtitle">Sign in to manage your content</p>

                    {error && (
                        <div className="error-message">
                            <span className="error-icon">⚠️</span>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                disabled={loading}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-full"
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="divider">
                        <span>or continue with</span>
                    </div>

                    <div className="social-buttons">
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-social"
                            disabled={loading}
                        >
                            <span>🔐</span> Google
                        </button>
                        <button
                            onClick={handleGithubSignIn}
                            className="btn btn-social"
                            disabled={loading}
                        >
                            <span>🐙</span> GitHub
                        </button>
                    </div>

                    <p className="auth-footer">
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
