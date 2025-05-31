import { useRef } from 'react';
import './Home.css';

const Home = () => {
  const exploreRef = useRef(null);

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="home-hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>
              <span className="highlight-script">Agriculture</span><br />
              & Organic <br /> Market
            </h1>
            <button className="explore-btn" onClick={scrollToExplore}>
              Explore More
            </button>
          </div>
        </div>
      </div>

      <section ref={exploreRef} className="explore-section">
        <h2 className="explore-section-title">Discover KrishiVishwas</h2>
        <div className="explore-cards-container active">
          <div className="explore-card">
            <h3>Fresh Organic Produce</h3>
            <p>Get the freshest organic fruits and vegetables directly from trusted local farmers.</p>
          </div>
          <div className="explore-card">
            <h3>Market Prices & Insights</h3>
            <p>Stay updated with the latest market prices and trends to make informed selling and buying decisions.</p>
          </div>
          <div className="explore-card">
            <h3>Sustainable Farming Tips</h3>
            <p>Access expert advice and tips for sustainable and eco-friendly farming practices.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
