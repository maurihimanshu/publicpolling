import './FilterBar.css';

const TYPES = ['all', 'movie', 'series', 'cartoon', 'anime', 'documentary'];
const GENRES = ['all', 'action', 'comedy', 'drama', 'horror', 'sci-fi', 'romance', 'thriller', 'animation'];

const FilterBar = ({ selectedType, onTypeChange, selectedGenre, onGenreChange, sortBy, onSortChange }) => {
    return (
        <div className="filter-bar">
            <div className="filter-group">
                <label>Type:</label>
                <div className="filter-buttons">
                    {TYPES.map(type => (
                        <button
                            key={type}
                            className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                            onClick={() => onTypeChange(type)}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="filter-group">
                <label>Genre:</label>
                <select
                    value={selectedGenre}
                    onChange={(e) => onGenreChange(e.target.value)}
                    className="filter-select"
                >
                    {GENRES.map(genre => (
                        <option key={genre} value={genre}>
                            {genre.charAt(0).toUpperCase() + genre.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label>Sort by:</label>
                <select
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="filter-select"
                >
                    <option value="newest">Newest First</option>
                    <option value="rating">Highest Rated</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
