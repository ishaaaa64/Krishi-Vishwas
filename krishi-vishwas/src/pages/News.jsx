import React, { useEffect, useState, useRef } from 'react';
import './News.css';

const fallbackImage = 'https://img.freepik.com/free-photo/green-field-blue-sky_1232-4263.jpg';

const categories = ['All', 'Farming', 'Technology', 'Environment', 'Policy'];

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const apiKey = 'YOUR_API_KEY'; // Replace with your NewsAPI key
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=agriculture&pageSize=6&page=${page}&apiKey=${apiKey}`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching news:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  const filteredArticles = articles.filter((article) => {
    const matchSearch =
      article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategory === 'All' ||
      article.title?.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchSearch && matchCategory;
  });

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="news-page">
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/audio/2022/03/15/audio_46e2c42627.mp3" type="audio/mp3" />
      </audio>

      <header className="news-header">
        <h1>🌾 Agriculture News</h1>
        <p>Latest updates from the world of farming and sustainability</p>
        <div className="search-filter-row">
          <input
            className="news-search"
            type="text"
            placeholder="Search news by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="sound-toggle" onClick={toggleAudio}>
            {isPlaying ? '🔇 Pause Nature Sound' : '🔊 Play Nature Sound'}
          </button>
        </div>
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? 'active' : ''}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="news-container">
        {loading ? (
          <p className="loading">Loading news...</p>
        ) : filteredArticles.length === 0 ? (
          <p className="no-news">No matching articles found.</p>
        ) : (
          filteredArticles.map((article, index) => (
            <div className="news-card" key={index}>
              <img
                src={article.urlToImage || fallbackImage}
                alt={article.title}
                onError={(e) => (e.target.src = fallbackImage)}
              />
              <h3>{article.title}</h3>
              <p>{article.description || 'No description available.'}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more →
              </a>
            </div>
          ))
        )}
      </main>

      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          ⬅ Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next ➡</button>
      </div>

      <footer className="news-footer">
        <p>© 2025 GreenFarm | Powered by NewsAPI</p>
      </footer>
    </div>
  );
};

export default News;
