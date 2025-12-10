import { useState, useEffect } from 'react';
import './ContentForm.css';

const TYPES = ['movie', 'series', 'cartoon', 'anime', 'documentary'];
const GENRES = ['action', 'comedy', 'drama', 'horror', 'sci-fi', 'romance', 'thriller', 'animation', 'adventure', 'fantasy'];

const ContentForm = ({ initialData, onSubmit, onCancel, loading, isEdit = false }) => {
    const [formData, setFormData] = useState({
        title: '',
        type: 'movie',
        description: '',
        releaseYear: new Date().getFullYear(),
        duration: '',
        genres: [],
        director: '',
        cast: '',
        trailerUrl: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title || '',
                type: initialData.type || 'movie',
                description: initialData.description || '',
                releaseYear: initialData.releaseYear || new Date().getFullYear(),
                duration: initialData.duration || '',
                genres: initialData.genres || [],
                director: initialData.director || '',
                cast: Array.isArray(initialData.cast) ? initialData.cast.join(', ') : '',
                trailerUrl: initialData.trailerUrl || ''
            });
            setImagePreview(initialData.imageUrl || '');
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGenreToggle = (genre) => {
        setFormData(prev => ({
            ...prev,
            genres: prev.genres.includes(genre)
                ? prev.genres.filter(g => g !== genre)
                : [...prev.genres, genre]
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitData = {
            ...formData,
            cast: formData.cast.split(',').map(c => c.trim()).filter(c => c),
            duration: parseInt(formData.duration),
            releaseYear: parseInt(formData.releaseYear)
        };

        onSubmit(submitData, imageFile);
    };

    return (
        <form onSubmit={handleSubmit} className="content-form">
            <div className="form-grid">
                <div className="form-section">
                    <h3>Basic Information</h3>

                    <div className="form-group">
                        <label htmlFor="title">Title *</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter content title"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="type">Type *</label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                required
                                disabled={loading}
                            >
                                {TYPES.map(type => (
                                    <option key={type} value={type}>
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="releaseYear">Release Year *</label>
                            <input
                                type="number"
                                id="releaseYear"
                                name="releaseYear"
                                value={formData.releaseYear}
                                onChange={handleChange}
                                min="1900"
                                max={new Date().getFullYear() + 5}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="duration">Duration (min) *</label>
                            <input
                                type="number"
                                id="duration"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                min="1"
                                placeholder="120"
                                required
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description *</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Enter a detailed description..."
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label>Genres * (Select at least one)</label>
                        <div className="genres-grid">
                            {GENRES.map(genre => (
                                <button
                                    key={genre}
                                    type="button"
                                    className={`genre-btn ${formData.genres.includes(genre) ? 'active' : ''}`}
                                    onClick={() => handleGenreToggle(genre)}
                                    disabled={loading}
                                >
                                    {genre.charAt(0).toUpperCase() + genre.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <h3>Additional Details</h3>

                    <div className="form-group">
                        <label htmlFor="director">Director</label>
                        <input
                            type="text"
                            id="director"
                            name="director"
                            value={formData.director}
                            onChange={handleChange}
                            placeholder="Director name"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cast">Cast (comma-separated)</label>
                        <input
                            type="text"
                            id="cast"
                            name="cast"
                            value={formData.cast}
                            onChange={handleChange}
                            placeholder="Actor 1, Actor 2, Actor 3"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="trailerUrl">Trailer URL</label>
                        <input
                            type="url"
                            id="trailerUrl"
                            name="trailerUrl"
                            value={formData.trailerUrl}
                            onChange={handleChange}
                            placeholder="https://youtube.com/..."
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Cover Image</label>
                        <div className="image-upload">
                            {imagePreview && (
                                <div className="image-preview">
                                    <img src={imagePreview} alt="Preview" />
                                </div>
                            )}
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                disabled={loading}
                            />
                            <label htmlFor="image" className="file-label">
                                {imagePreview ? 'Change Image' : 'Upload Image'}
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-actions">
                <button
                    type="button"
                    onClick={onCancel}
                    className="btn btn-secondary"
                    disabled={loading}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading || formData.genres.length === 0}
                >
                    {loading ? (isEdit ? 'Updating...' : 'Adding...') : (isEdit ? 'Update Content' : 'Add Content')}
                </button>
            </div>
        </form>
    );
};

export default ContentForm;
