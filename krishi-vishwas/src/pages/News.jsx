import React, { useEffect, useState } from 'react';
import './News.css';

const fallbackImage = 'https://img.freepik.com/free-photo/green-field-blue-sky_1232-4263.jpg';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const apiKey = 'YOUR_API_KEY'; // <-- Replace with your NewsAPI key
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

  return (
    <div className="news-page">
      <header className="news-header">
        <h1>🌾 Agriculture News</h1>
        <p>Latest updates from the world of farming and sustainability</p>
      </header>

      <main className="news-container">
        {loading ? (
          <p className="loading">Loading news...</p>
        ) : articles.length === 0 ? (
          <p className="no-news">No articles found.</p>
        ) : (
          articles.map((article, index) => (
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
