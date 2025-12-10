import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
                type="text"
                placeholder="Search for movies, series, cartoons..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />
            {searchTerm && (
                <button
                    className="clear-button"
                    onClick={() => onSearchChange('')}
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export default SearchBar;
