import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import ContentForm from '../components/ContentForm';
import './AddContent.css';

const AddContent = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (formData) => {
        if (!user) {
            setError('You must be logged in to add content');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Use URL from form directly - no file upload
            const imageUrl = formData.imageUrl || '';

            // Create content document
            const contentData = {
                ...formData,
                imageUrl,
                createdBy: user.uid,
                createdByName: user.displayName || user.email,
                createdAt: new Date(),
                updatedAt: new Date(),
                ratings: {
                    total: 0,
                    count: 0
                },
                reviewCount: 0
            };

            await addDoc(collection(db, 'contents'), contentData);
            navigate('/');
        } catch (err) {
            console.error('Error adding content:', err);
            // Check if it's a permission error
            if (err.code === 'permission-denied') {
                setError('Permission denied. Please check your Firestore rules.');
            } else {
                setError(err.message || 'Failed to add content');
            }
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <div className="add-content-page">
                <div className="container">
                    <div className="empty-state">
                        <span className="empty-icon">🔐</span>
                        <h3>Authentication Required</h3>
                        <p>You must be logged in to add content.</p>
                        <p>Please sign in from the main app.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="add-content-page">
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">Add New Content</h1>
                    <p className="page-subtitle">Share entertainment content with the community</p>
                </header>

                {error && (
                    <div className="error-message">
                        <span className="error-icon">⚠️</span>
                        {error}
                    </div>
                )}

                <ContentForm
                    onSubmit={handleSubmit}
                    onCancel={() => navigate('/')}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default AddContent;
