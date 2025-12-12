import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import AddContent from './pages/AddContent';
import EditContent from './pages/EditContent';
import { useContentHeight } from './hooks/useContentHeight';
import './App.css';

function App() {
    useContentHeight();

    return (
        <AuthProvider>
            <Router basename={import.meta.env.BASE_URL}>
                <div className="app content-manager-app">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/add" element={<AddContent />} />
                        <Route path="/edit/:id" element={<EditContent />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
