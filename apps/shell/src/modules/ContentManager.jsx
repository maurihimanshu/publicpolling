import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddContent from './pages/AddContent';
import EditContent from './pages/EditContent';
import './ContentManager.css';

const ContentManager = () => {
    return (
        <div className="content-manager-module">
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/add" element={<AddContent />} />
                <Route path="/edit/:id" element={<EditContent />} />
            </Routes>
        </div>
    );
};

export default ContentManager;
