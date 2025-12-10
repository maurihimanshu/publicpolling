import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import MyContentCard from '../components/MyContentCard';
import './Dashboard.css';

const Dashboard = () => {
    const { user } = useAuth();
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        total: 0,
        totalRatings: 0,
        totalReviews: 0,
        avgRating: 0
    });

    useEffect(() => {
        if (user) {
            fetchMyContents();
        } else {
            setLoading(false);
        }
    }, [user]);

    const fetchMyContents = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(db, 'contents'),
                where('createdBy', '==', user.uid)
            );

            const querySnapshot = await getDocs(q);
            const contentsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setContents(contentsData);
            calculateStats(contentsData);
        } catch (error) {
            console.error('Error fetching contents:', error);
            // Set empty data on error
            setContents([]);
            setStats({
                total: 0,
                totalRatings: 0,
                totalReviews: 0,
                avgRating: 0
            });
        } finally {
            setLoading(false);
        }
    };

    const calculateStats = (contentsData) => {
        const total = contentsData.length;
        const totalRatings = contentsData.reduce((sum, c) => sum + (c.ratings?.count || 0), 0);
        const totalReviews = contentsData.reduce((sum, c) => sum + (c.reviewCount || 0), 0);
        const totalRatingSum = contentsData.reduce((sum, c) => sum + (c.ratings?.total || 0), 0);
        const avgRating = totalRatings > 0 ? (totalRatingSum / totalRatings).toFixed(1) : 0;

        setStats({ total, totalRatings, totalReviews, avgRating });
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this content? This action cannot be undone.')) {
            return;
        }

        try {
            await deleteDoc(doc(db, 'contents', id));
            fetchMyContents();
        } catch (error) {
            console.error('Error deleting content:', error);
            alert('Failed to delete content');
        }
    };

    return (
        <div className="dashboard-page">
            <div className="container">
                <header className="dashboard-header">
                    <div>
                        <h1 className="page-title">My Content Dashboard</h1>
                        <p className="page-subtitle">Manage your entertainment listings</p>
                    </div>
                    <Link to="/add" className="btn btn-primary btn-large">
                        ➕ Add New Content
                    </Link>
                </header>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">📊</div>
                        <div className="stat-value">{stats.total}</div>
                        <div className="stat-label">Total Content</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">⭐</div>
                        <div className="stat-value">{stats.avgRating}</div>
                        <div className="stat-label">Avg Rating</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">🗳️</div>
                        <div className="stat-value">{stats.totalRatings}</div>
                        <div className="stat-label">Total Ratings</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">💬</div>
                        <div className="stat-value">{stats.totalReviews}</div>
                        <div className="stat-label">Total Reviews</div>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Your Content</h2>

                    {loading ? (
                        <div className="loading-state">
                            <div className="spinner"></div>
                            <p>Loading your content...</p>
                        </div>
                    ) : contents.length === 0 ? (
                        <div className="empty-state">
                            <span className="empty-icon">🎬</span>
                            <h3>No content yet</h3>
                            <p>Start by adding your first entertainment listing!</p>
                            <Link to="/add" className="btn btn-primary">
                                Add Content
                            </Link>
                        </div>
                    ) : (
                        <div className="contents-grid">
                            {contents.map(content => (
                                <MyContentCard
                                    key={content.id}
                                    content={content}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
