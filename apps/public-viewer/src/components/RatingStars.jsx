import './RatingStars.css';

const RatingStars = ({ rating, interactive = false, onRate, size = 'medium' }) => {
    const stars = [1, 2, 3, 4, 5];

    const handleClick = (value) => {
        if (interactive && onRate) {
            onRate(value);
        }
    };

    return (
        <div className={`rating-stars ${size} ${interactive ? 'interactive' : ''}`}>
            {stars.map((star) => (
                <span
                    key={star}
                    className={`star ${star <= rating ? 'filled' : ''}`}
                    onClick={() => handleClick(star)}
                >
                    ⭐
                </span>
            ))}
        </div>
    );
};

export default RatingStars;
