import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../config/firebase';
import { useAuth } from '../../../contexts/AuthContext';
import ContentForm from '../components/ContentForm';
import './AddContent.css';

const AddContent = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (formData, imageFile) => {
        setLoading(true);
        setError('');

        try {
            let imageUrl = '';

            // Upload image if provided
            if (imageFile) {
                const imageRef = ref(storage, `content-images/${Date.now()}_${imageFile.name}`);
                await uploadBytes(imageRef, imageFile);
                imageUrl = await getDownloadURL(imageRef);
            }

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
            navigate('/manage');
        } catch (err) {
            console.error('Error adding content:', err);
            setError(err.message || 'Failed to add content');
        } finally {
            setLoading(false);
        }
    };

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
                    onCancel={() => navigate('/manage')}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default AddContent;
