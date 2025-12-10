import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Home.css';

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Discover, Rate & Review
                        <span className="gradient-text"> Entertainment</span>
                    </h1>
                    <p className="hero-subtitle">
                        Your ultimate platform for movies, web series, cartoons, and more.
                        Join our community to share your opinions and discover what's worth watching.
                    </p>
                    <div className="hero-actions">
                        <Link to="/browse" className="btn btn-primary btn-large">
                            🎬 Browse Content
                        </Link>
                        {user ? (
                            <Link to="/manage" className="btn btn-secondary btn-large">
                                ➕ Add Content
                            </Link>
                        ) : (
                            <Link to="/login" className="btn btn-secondary btn-large">
                                🔐 Sign In
                            </Link>
                        )}
                    </div>
                </div>
                <div className="hero-image">
                    <div className="floating-card card-1">🎥</div>
                    <div className="floating-card card-2">📺</div>
                    <div className="floating-card card-3">🎭</div>
                    <div className="floating-card card-4">⭐</div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2 className="section-title">Why Entertainment Hub?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🌐</div>
                            <h3>Open Source</h3>
                            <p>Built by the community, for the community. Contribute and help us grow!</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⭐</div>
                            <h3>Rate & Review</h3>
                            <p>Share your honest opinions and help others discover great content</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎬</div>
                            <h3>All Entertainment</h3>
                            <p>Movies, series, cartoons, anime, documentaries - all in one place</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure & Private</h3>
                            <p>Your data is protected with enterprise-level Firebase security</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Responsive Design</h3>
                            <p>Perfect experience on desktop, tablet, and mobile devices</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3>Fast & Modern</h3>
                            <p>Built with React and Vite for lightning-fast performance</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Get Started?</h2>
                        <p>Join thousands of entertainment enthusiasts sharing their reviews</p>
                        <div className="cta-actions">
                            <Link to="/browse" className="btn btn-primary btn-large">
                                Start Browsing
                            </Link>
                            {!user && (
                                <Link to="/signup" className="btn btn-outline btn-large">
                                    Create Account
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
