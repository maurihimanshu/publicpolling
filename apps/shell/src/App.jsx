import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MicroFrontend from './components/MicroFrontend';
import './App.css';

// Micro-frontend URLs
const PUBLIC_VIEWER_URL = import.meta.env.PROD
    ? '/publicpolling/public-viewer'
    : (import.meta.env.VITE_PUBLIC_VIEWER_URL || 'http://localhost:3001');

const CONTENT_MANAGER_URL = import.meta.env.PROD
    ? '/publicpolling/content-manager'
    : (import.meta.env.VITE_CONTENT_MANAGER_URL || 'http://localhost:3002');

function App() {
    return (
        <AuthProvider>
            <Router basename={import.meta.env.BASE_URL}>
                <div className="app">
                    <Header />

                    <main className="main">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />

                            {/* Public Viewer Micro-Frontend */}
                            <Route
                                path="/browse/*"
                                element={
                                    <MicroFrontend
                                        name="public-viewer"
                                        host={PUBLIC_VIEWER_URL}
                                    />
                                }
                            />

                            {/* Content Manager Micro-Frontend (Protected) */}
                            <Route
                                path="/manage/*"
                                element={
                                    <ProtectedRoute>
                                        <MicroFrontend
                                            name="content-manager"
                                            host={CONTENT_MANAGER_URL}
                                        />
                                    </ProtectedRoute>
                                }
                            />

                            {/* Redirect unknown routes */}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>

                    <footer className="footer">
                        <div className="container">
                            <div className="footer-content">
                                <p>&copy; 2025 Entertainment Hub. Micro-Frontends Architecture.</p>
                                <div className="footer-links">
                                    <a href="https://github.com/maurihimanshu/publicpolling" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                    <span>•</span>
                                    <a href="/browse">Browse</a>
                                    <span>•</span>
                                    <a href="/manage">Contribute</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
