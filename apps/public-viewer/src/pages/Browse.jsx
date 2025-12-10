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
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        fetchContents();
    }, [selectedType, sortBy]);

    const fetchContents = async () => {
        setLoading(true);
        try {
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
            const contentsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setContents(contentsData);
        } catch (error) {
            console.error('Error fetching contents:', error);
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

                {loading ? (
                    <div className="loading-state">
                        <div className="spinner"></div>
                        <p>Loading content...</p>
                    </div>
                ) : filteredContents.length === 0 ? (
                    <div className="empty-state">
                        <span className="empty-icon">🎬</span>
                        <h3>No content found</h3>
                        <p>
                            {searchTerm || selectedType !== 'all' || selectedGenre !== 'all'
                                ? 'Try adjusting your search or filters'
                                : 'The database is empty. Be the first to add entertainment content!'}
                        </p>
                        {!searchTerm && selectedType === 'all' && selectedGenre === 'all' && (
                            <div className="empty-actions">
                                <a href="/login" className="btn btn-primary">
                                    Sign In to Add Content
                                </a>
                                <p className="empty-hint">
                                    💡 Tip: Create an account to add movies, series, cartoons, and more!
                                </p>
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
