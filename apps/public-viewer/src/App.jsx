import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Browse from './pages/Browse';
import ContentDetail from './pages/ContentDetail';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router basename={import.meta.env.BASE_URL}>
                <div className="app public-viewer-app">
                    <Routes>
                        <Route path="/" element={<Browse />} />
                        <Route path="/:id" element={<ContentDetail />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
