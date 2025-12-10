import { Link } from 'react-router-dom';
import './MyContentCard.css';

const MyContentCard = ({ content, onDelete }) => {
    const averageRating = content.ratings?.count > 0
        ? (content.ratings.total / content.ratings.count).toFixed(1)
        : 0;

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
        <div className="my-content-card">
            <div className="card-image">
                {content.imageUrl ? (
                    <img src={content.imageUrl} alt={content.title} />
                ) : (
                    <div className="image-placeholder">🎬</div>
                )}
                <div className="card-overlay">
                    <span className="card-type">{content.type}</span>
                </div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{content.title}</h3>

                <div className="card-stats">
                    <div className="stat">
                        <span className="stat-icon">⭐</span>
                        <span>{averageRating} ({content.ratings?.count || 0})</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">💬</span>
                        <span>{content.reviewCount || 0} reviews</span>
                    </div>
                </div>

                <p className="card-date">
                    Created: {formatDate(content.createdAt)}
                </p>

                <div className="card-actions">
                    <Link to={`/browse/${content.id}`} className="btn-action btn-view">
                        👁️ View
                    </Link>
                    <Link to={`/edit/${content.id}`} className="btn-action btn-edit">
                        ✏️ Edit
                    </Link>
                    <button
                        onClick={() => onDelete(content.id)}
                        className="btn-action btn-delete"
                    >
                        🗑️ Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyContentCard;
