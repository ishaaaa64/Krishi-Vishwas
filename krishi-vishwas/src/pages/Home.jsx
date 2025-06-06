import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const slideshowImages = [
  "/images/slideshow1.jpg",
  "/images/slideshow2.jpg",
  "/images/slideshow3.jpg"
];

const crops = [
  {
    title: "Wheat",
    image: "/images/wheat.jpg",
    description: "Rich in protein, cultivated in vast fields across India. Essential for roti and bread."
  },
  {
    title: "Rice",
    image: "/images/rice.jpg",
    description: "Staple food of India, grown in water-filled fields, rich in carbs and minerals."
  },
  {
    title: "Sugarcane",
    image: "/images/sugarcane.jpg",
    description: "Tall green crop used to produce sugar and jaggery. High water requirement."
  }
];

const testimonials = [
  {
    name: "Ramesh Kumar",
    feedback: "Krishi Vishwas helped me get real-time market rates. Very helpful!",
    image: "/images/farmer1.jpg"
  },
  {
    name: "Sita Devi",
    feedback: "Best platform for learning sustainable farming practices.",
    image: "/images/farmer2.jpg"
  }
];

const Home = () => {
  const exploreRef = useRef(null);
  const [slide, setSlide] = useState(0);

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Live Background Video */}
      <div className="home-hero">
        <video autoPlay muted loop className="background-video">
          <source src="/videos/agriculture.mp4" type="video/mp4" />
        </video>
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

      {/* Explore Section */}
      <section ref={exploreRef} className="explore-section">
        <h2 className="explore-section-title">Discover KrishiVishwas</h2>
        <div className="explore-cards-container">
          <Link
            to="/produce"
            className="explore-card explore-card-bg"
            style={{ backgroundImage: `url(${slideshowImages[slide]})` }}
          >
            <div className="explore-card-overlay" />
            <h3>Fresh Organic Produce</h3>
            <p>Get the freshest organic fruits and vegetables directly from trusted local farmers.</p>
          </Link>
          <Link
            to="/market-prices"
            className="explore-card explore-card-bg"
            style={{ backgroundImage: `url(${slideshowImages[(slide + 1) % slideshowImages.length]})` }}
          >
            <div className="explore-card-overlay" />
            <h3>Market Prices & Insights</h3>
            <p>Stay updated with the latest market prices and trends to make informed selling and buying decisions.</p>
          </Link>
          <Link
            to="/farming-tips"
            className="explore-card explore-card-bg"
            style={{ backgroundImage: `url(${slideshowImages[(slide + 2) % slideshowImages.length]})` }}
          >
            <div className="explore-card-overlay" />
            <h3>Sustainable Farming Tips</h3>
            <p>Access expert advice and tips for sustainable and eco-friendly farming practices.</p>
          </Link>
        </div>
      </section>

      {/* Crops Section */}
      <section className="crop-section">
        <h2 className="section-title">Our Major Crops</h2>
        <div className="crop-cards">
          {crops.map((crop, idx) => (
            <div className="crop-card" key={idx}>
              <img src={crop.image} alt={crop.title} className="crop-image" />
              <h3>{crop.title}</h3>
              <p>{crop.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <h2 className="section-title">What Our Farmers Say</h2>
        <div className="testimonials">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <img src={t.image} alt={t.name} className="testimonial-image" />
              <p>"{t.feedback}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p className="contact-agri-note">
          For agriculture support, inquiries, or partnership, reach out to us anytime. We're here to help farmers and promote sustainable growth.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Krishi Vishwas. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
