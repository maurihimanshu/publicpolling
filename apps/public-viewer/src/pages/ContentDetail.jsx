import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, addDoc, query, where, getDocs, updateDoc, increment } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import RatingStars from '../components/RatingStars';
import ReviewsList from '../components/ReviewsList';
import AddReview from '../components/AddReview';
import './ContentDetail.css';

const ContentDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [content, setContent] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [userRating, setUserRating] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContent();
        fetchReviews();
        if (user) {
            fetchUserRating();
        }
    }, [id, user]);

    const fetchContent = async () => {
        try {
            const docRef = doc(db, 'contents', id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setContent({ id: docSnap.id, ...docSnap.data() });
            } else {
                navigate('/browse');
            }
        } catch (error) {
            console.error('Error fetching content:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchReviews = async () => {
        try {
            const q = query(
                collection(db, 'reviews'),
                where('contentId', '==', id)
            );
            const querySnapshot = await getDocs(q);
            const reviewsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setReviews(reviewsData);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const fetchUserRating = async () => {
        try {
            const q = query(
                collection(db, 'ratings'),
                where('contentId', '==', id),
                where('userId', '==', user.uid)
            );
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                setUserRating(querySnapshot.docs[0].data().rating);
            }
        } catch (error) {
            console.error('Error fetching user rating:', error);
        }
    };

    const handleRate = async (rating) => {
        if (!user) {
            navigate('/login');
            return;
        }

        try {
            const ratingData = {
                contentId: id,
                userId: user.uid,
                userName: user.displayName || user.email,
                rating,
                createdAt: new Date()
            };

            await addDoc(collection(db, 'ratings'), ratingData);

            // Update content average rating
            const contentRef = doc(db, 'contents', id);
            await updateDoc(contentRef, {
                'ratings.count': increment(1),
                'ratings.total': increment(rating)
            });

            setUserRating(rating);
            fetchContent();
        } catch (error) {
            console.error('Error adding rating:', error);
        }
    };

    const handleReviewAdded = () => {
        fetchReviews();
        fetchContent();
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    if (!content) {
        return null;
    }

    const averageRating = content.ratings?.count > 0
        ? (content.ratings.total / content.ratings.count).toFixed(1)
        : 0;

    return (
        <div className="content-detail-page">
            <div className="content-hero" style={{
                backgroundImage: content.imageUrl ? `url(${content.imageUrl})` : 'none'
            }}>
                <div className="hero-overlay"></div>
            </div>

            <div className="container">
                <div className="content-main">
                    <div className="content-poster">
                        {content.imageUrl ? (
                            <img src={content.imageUrl} alt={content.title} />
                        ) : (
                            <div className="poster-placeholder">🎬</div>
                        )}
                    </div>

                    <div className="content-info">
                        <div className="content-header">
                            <h1 className="content-title">{content.title}</h1>
                            <span className="content-type">{content.type}</span>
                        </div>

                        <div className="content-meta">
                            <span>{content.releaseYear}</span>
                            <span>•</span>
                            <span>{content.duration} min</span>
                            <span>•</span>
                            <span>{content.genres?.join(', ')}</span>
                        </div>

                        <div className="rating-section">
                            <div className="average-rating">
                                <span className="rating-value">{averageRating}</span>
                                <RatingStars rating={parseFloat(averageRating)} size="large" />
                                <span className="rating-count">({content.ratings?.count || 0} ratings)</span>
                            </div>

                            {user && (
                                <div className="user-rating">
                                    <p>Your Rating:</p>
                                    <RatingStars
                                        rating={userRating}
                                        interactive
                                        onRate={handleRate}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="content-description">
                            <h3>Overview</h3>
                            <p>{content.description}</p>
                        </div>

                        <div className="content-details">
                            {content.director && (
                                <div className="detail-item">
                                    <strong>Director:</strong> {content.director}
                                </div>
                            )}
                            {content.cast && content.cast.length > 0 && (
                                <div className="detail-item">
                                    <strong>Cast:</strong> {content.cast.join(', ')}
                                </div>
                            )}
                        </div>

                        {content.trailerUrl && (
                            <a
                                href={content.trailerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                🎥 Watch Trailer
                            </a>
                        )}
                    </div>
                </div>

                <div className="reviews-section">
                    <h2>Reviews ({reviews.length})</h2>

                    {user && (
                        <AddReview
                            contentId={id}
                            onReviewAdded={handleReviewAdded}
                        />
                    )}

                    <ReviewsList reviews={reviews} />
                </div>
            </div>
        </div>
    );
};

export default ContentDetail;
