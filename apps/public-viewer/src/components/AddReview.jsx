import { useState, useEffect } from 'react';
import { collection, addDoc, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import RatingStars from './RatingStars';
import './AddReview.css';

const AddReview = ({ contentId, onReviewAdded }) => {
    const { user } = useAuth();
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);

    // Guest State
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');

    // Bot Verification State
    const [verificationProblem, setVerificationProblem] = useState({ q: '', a: 0 });
    const [verificationAnswer, setVerificationAnswer] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        generateVerification();
    }, []);

    const generateVerification = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setVerificationProblem({
            q: `${num1} + ${num2}`,
            a: num1 + num2
        });
        setVerificationAnswer('');
        setIsVerified(false);
    };

    const handleVerification = () => {
        if (parseInt(verificationAnswer) === verificationProblem.a) {
            setIsVerified(true);
        } else {
            alert('Incorrect verification answer. Please try again.');
            generateVerification();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Final Validation
        if (!user && !isVerified) {
            alert('Please complete the verification check.');
            return;
        }
        if (!user && !guestName.trim()) {
            alert('Name is required.');
            return;
        }
        if (!review.trim()) return;

        setLoading(true);
        try {
            const userName = user ? (user.displayName || user.email) : guestName;
            const userEmail = user ? user.email : guestEmail;
            const reviewData = {
                contentId,
                userId: user ? user.uid : 'guest',
                isGuest: !user,
                userName,
                userEmail: userEmail || null,
                userPhoto: user?.photoURL || null,
                review: review.trim(),
                rating: rating > 0 ? rating : null,
                createdAt: new Date(),
                likes: 0
            };

            await addDoc(collection(db, 'reviews'), reviewData);

            // Update content stats
            const contentRef = doc(db, 'contents', contentId);
            const updates = {
                reviewCount: increment(1)
            };

            // If rating provided, update aggregates
            if (rating > 0) {
                updates['ratings.count'] = increment(1);
                updates['ratings.total'] = increment(rating);
                // Also update legacy average if used for sorting, though strictly we should compute it
                // We rely on count/total for accuracy
            }

            await updateDoc(contentRef, updates);

            // Reset Form but keep name/email for guests if they want to post another? 
            // Better to clear for fresh start or keep name. Let's clear review.
            setReview('');
            setRating(0);
            if (!user) {
                generateVerification(); // New challenge
            }

            onReviewAdded();
        } catch (error) {
            console.error('Error adding review:', error);
            alert('Failed to post review. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-review">
            {!user && (
                <div className="guest-info-section">
                    <h4>Guest Review</h4>
                    <div className="form-row">
                        <input
                            type="text"
                            placeholder="Your Name (Required)"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            required
                            className="form-input"
                        />
                        <input
                            type="email"
                            placeholder="Email (Optional)"
                            value={guestEmail}
                            onChange={(e) => setGuestEmail(e.target.value)}
                            className="form-input"
                        />
                    </div>
                </div>
            )}

            <div className="review-header">
                <div className="user-avatar">
                    {user ? (
                        user.photoURL ? <img src={user.photoURL} alt="User" /> : (user.displayName?.[0] || 'U')
                    ) : (
                        guestName ? guestName[0].toUpperCase() : '?'
                    )}
                </div>
                <div className="review-meta-inputs">
                    <div className="user-name">
                        {user ? (user.displayName || user.email) : (guestName || 'Posting as Guest')}
                    </div>
                    <div className="rating-input-wrapper">
                        <span>Your Rating:</span>
                        <RatingStars
                            rating={rating}
                            interactive={true}
                            onRate={setRating}
                        />
                    </div>
                </div>
            </div>

            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your thoughts about this content..."
                rows={4}
                disabled={loading}
                required
                className="review-textarea"
            />

            {!user && !isVerified && (
                <div className="bot-verification">
                    <label>Human Verification: What is {verificationProblem.q}?</label>
                    <div className="verification-input-group">
                        <input
                            type="number"
                            value={verificationAnswer}
                            onChange={(e) => setVerificationAnswer(e.target.value)}
                            placeholder="?"
                            className="verify-input"
                        />
                        <button
                            type="button"
                            onClick={handleVerification}
                            className="btn btn-secondary verify-btn"
                        >
                            Verify
                        </button>
                    </div>
                </div>
            )}

            {!user && isVerified && (
                <div className="verification-success">
                    ✅ Verified Human
                </div>
            )}

            <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={loading || !review.trim() || (!user && !isVerified)}
            >
                {loading ? 'Posting...' : 'Post Review'}
            </button>
        </form>
    );
};

export default AddReview;
