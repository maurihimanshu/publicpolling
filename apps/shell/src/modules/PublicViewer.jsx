import { Routes, Route } from 'react-router-dom';
import Browse from './pages/Browse';
import ContentDetail from './pages/ContentDetail';
import './PublicViewer.css';

const PublicViewer = () => {
    return (
        <div className="public-viewer-module">
            <Routes>
                <Route index element={<Browse />} />
                <Route path="/:id" element={<ContentDetail />} />
            </Routes>
        </div>
    );
};

export default PublicViewer;
