import './ReviewsList.css';

const ReviewsList = ({ reviews }) => {
    if (reviews.length === 0) {
        return (
            <div className="no-reviews">
                <p>No reviews yet. Be the first to share your thoughts!</p>
            </div>
        );
    }

    const formatDate = (timestamp) => {
        if (!timestamp) return 'Unknown';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="reviews-list">
            {reviews.map((review) => (
                <div key={review.id} className="review-item">
                    <div className="review-header">
                        <div className="reviewer-info">
                            <div className="reviewer-avatar">
                                {review.userPhoto ? (
                                    <img src={review.userPhoto} alt={review.userName} />
                                ) : (
                                    review.userName?.[0] || '👤'
                                )}
                            </div>
                            <div>
                                <div className="reviewer-name">{review.userName}</div>
                                <div className="review-date">{formatDate(review.createdAt)}</div>
                            </div>
                        </div>
                    </div>
                    <p className="review-text">{review.review}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewsList;
