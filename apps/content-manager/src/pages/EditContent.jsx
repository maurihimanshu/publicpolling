import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import ContentForm from '../components/ContentForm';
import './EditContent.css';

const EditContent = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchContent();
    }, [id]);

    const fetchContent = async () => {
        try {
            const docRef = doc(db, 'contents', id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                // Check if user owns this content
                if (data.createdBy !== user.uid) {
                    navigate('/manage');
                    return;
                }
                setContent({ id: docSnap.id, ...data });
            } else {
                navigate('/manage');
            }
        } catch (error) {
            console.error('Error fetching content:', error);
            setError('Failed to load content');
        } finally {
            setFetchLoading(false);
        }
    };

    const handleSubmit = async (formData) => {
        setLoading(true);
        setError('');

        try {
            // Use URL from form if provided, otherwise keep existing
            const imageUrl = formData.imageUrl || content.imageUrl || '';

            // Update content document
            const contentData = {
                ...formData,
                imageUrl,
                updatedAt: new Date()
            };

            await updateDoc(doc(db, 'contents', id), contentData);
            navigate('/manage');
        } catch (err) {
            console.error('Error updating content:', err);
            // Check if it's a permission error
            if (err.code === 'permission-denied') {
                setError('Permission denied. Please check your Firestore rules.');
            } else {
                setError(err.message || 'Failed to update content');
            }
        } finally {
            setLoading(false);
        }
    };

    if (fetchLoading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading content...</p>
            </div>
        );
    }

    if (!content) {
        return null;
    }

    return (
        <div className="edit-content-page">
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">Edit Content</h1>
                    <p className="page-subtitle">Update your entertainment listing</p>
                </header>

                {error && (
                    <div className="error-message">
                        <span className="error-icon">⚠️</span>
                        {error}
                    </div>
                )}

                <ContentForm
                    initialData={content}
                    onSubmit={handleSubmit}
                    onCancel={() => navigate('/manage')}
                    loading={loading}
                    isEdit
                />
            </div>
        </div>
    );
};

export default EditContent;
