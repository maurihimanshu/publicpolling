import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import ContentCard from '../components/ContentCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import './Browse.css';

const Browse = () => {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        fetchContents();
    }, [selectedType, sortBy]);

    const fetchContents = async () => {
        setLoading(true);
        setError(null);
        try {
            console.log('Fetching contents...');
            let q = query(
                collection(db, 'contents'),
                orderBy(sortBy === 'newest' ? 'createdAt' : 'ratings.average', 'desc'),
                limit(50)
            );

            if (selectedType !== 'all') {
                q = query(
                    collection(db, 'contents'),
                    where('type', '==', selectedType),
                    orderBy(sortBy === 'newest' ? 'createdAt' : 'ratings.average', 'desc'),
                    limit(50)
                );
            }

            const querySnapshot = await getDocs(q);
            console.log('Snapshot size:', querySnapshot.size);

            const contentsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setContents(contentsData);
        } catch (error) {
            console.error('Error fetching contents:', error);
            setError(error.message || 'Failed to fetch content');
        } finally {
            setLoading(false);
        }
    };

    const filteredContents = contents.filter(content => {
        const matchesSearch = content.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            content.description?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenre === 'all' || content.genres?.includes(selectedGenre);
        return matchesSearch && matchesGenre;
    });

    if (loading && contents.length === 0) {
        return (
            <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading content...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="browse-page">
                <div className="container">
                    <header className="browse-header">
                        <h1 className="page-title">Browse Entertainment</h1>
                    </header>
                    <div className="error-state" style={{ textAlign: 'center', padding: '4rem' }}>
                        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>⚠️</span>
                        <h3>Unable to load content</h3>
                        <p style={{ color: '#ff6b6b' }}>Error: {error}</p>
                        <button onClick={fetchContents} className="btn btn-primary" style={{ marginTop: '1rem' }}>Retry Connection</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="browse-page">
            <div className="container">
                <header className="browse-header">
                    <h1 className="page-title">Browse Entertainment</h1>
                    <p className="page-subtitle">Discover movies, series, cartoons, and more</p>
                </header>

                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />

                <FilterBar
                    selectedType={selectedType}
                    onTypeChange={setSelectedType}
                    selectedGenre={selectedGenre}
                    onGenreChange={setSelectedGenre}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                />

                {filteredContents.length === 0 ? (
                    <div className="empty-state">
                        <span className="empty-icon">🎬</span>
                        <h3>No content found</h3>
                        <p>
                            {searchTerm || selectedType !== 'all' || selectedGenre !== 'all'
                                ? 'Try adjusting your search or filters'
                                : 'The database is empty.'}
                        </p>
                        {contents.length === 0 && (
                            <div className="debug-info" style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.5 }}>
                                Debug: Firestore returned 0 documents from "contents" collection.
                            </div>
                        )}
                        {!searchTerm && selectedType === 'all' && selectedGenre === 'all' && (
                            <div className="empty-actions">
                                <a href="/login" className="btn btn-primary">
                                    Sign In to Add Content
                                </a>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="contents-grid">
                        {filteredContents.map(content => (
                            <ContentCard key={content.id} content={content} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Browse;
