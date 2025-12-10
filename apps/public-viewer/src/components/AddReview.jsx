import { useState } from 'react';
import { collection, addDoc, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import './AddReview.css';

const AddReview = ({ contentId, onReviewAdded }) => {
    const { user } = useAuth();
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!review.trim()) return;

        setLoading(true);
        try {
            const reviewData = {
                contentId,
                userId: user.uid,
                userName: user.displayName || user.email,
                userPhoto: user.photoURL || null,
                review: review.trim(),
                createdAt: new Date(),
                likes: 0
            };

            await addDoc(collection(db, 'reviews'), reviewData);

            // Update content review count
            const contentRef = doc(db, 'contents', contentId);
            await updateDoc(contentRef, {
                reviewCount: increment(1)
            });

            setReview('');
            onReviewAdded();
        } catch (error) {
            console.error('Error adding review:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-review">
            <div className="review-header">
                <div className="user-avatar">
                    {user.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName} />
                    ) : (
                        user.displayName?.[0] || user.email?.[0] || '👤'
                    )}
                </div>
                <div className="user-name">{user.displayName || user.email}</div>
            </div>

            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your thoughts about this content..."
                rows={4}
                disabled={loading}
                required
            />

            <button
                type="submit"
                className="btn btn-primary"
                disabled={loading || !review.trim()}
            >
                {loading ? 'Posting...' : 'Post Review'}
            </button>
        </form>
    );
};

export default AddReview;
