import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';
import './ContentCard.css';

const ContentCard = ({ content }) => {
    const averageRating = content.ratings?.count > 0
        ? (content.ratings.total / content.ratings.count).toFixed(1)
        : 0;

    return (
        <Link to={`/browse/${content.id}`} className="content-card">
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
                <p className="card-meta">
                    {content.releaseYear} • {content.duration} min
                </p>

                <div className="card-rating">
                    <RatingStars rating={parseFloat(averageRating)} size="small" />
                    <span className="rating-text">
                        {averageRating} ({content.ratings?.count || 0})
                    </span>
                </div>

                <div className="card-genres">
                    {content.genres?.slice(0, 3).map((genre, index) => (
                        <span key={index} className="genre-tag">{genre}</span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ContentCard;
