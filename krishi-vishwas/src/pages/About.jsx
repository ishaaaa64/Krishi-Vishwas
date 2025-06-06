import React from 'react';

const About = () => {
  const videoBackground = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    zIndex: -1,
  };

  const overlayStyle = {
    position: 'relative',
    zIndex: 1,
    fontFamily: 'Segoe UI, sans-serif',
    color: '#1b5e20',
  };

  const headerStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '60px 20px',
    textAlign: 'center',
    borderBottomLeftRadius: '40px',
    borderBottomRightRadius: '40px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    color: '#1b5e20',
  };

  const contentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  };

  const textStyle = {
    flex: '1 1 500px',
    padding: '20px',
  };

  const imageStyle = {
    flex: '1 1 400px',
    padding: '20px',
  };

  const imgStyle = {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  };

  const footerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(0, 128, 0, 0.8)',
    color: '#fff',
    marginTop: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  };

  const heading2Style = {
    color: '#2e7d32',
    marginTop: '20px',
  };

  const ulStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
    margin: '10px 0',
  };

  const liStyle = {
    margin: '8px 0',
    fontSize: '1.1rem',
  };

  return (
    <div style={overlayStyle}>
      {/* Background Video */}
      <video autoPlay muted loop style={videoBackground}>
        <source src="/videos/agriculture.mp4" type="video/mp4" />
      </video>

      {/* Header */}
      <header style={headerStyle}>
        <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: 'bold' }}>
          🌾 Welcome to <span style={{ color: '#2e7d32' }}>Krishi Vishwas</span>
        </h1>
        <p style={{ fontSize: '1.3rem', fontWeight: 500 }}>
          Empowering farmers with trust, innovation & sustainable growth.
        </p>
      </header>

      {/* Content Section */}
      <section style={contentStyle}>
        <div style={textStyle}>
          <h2 style={heading2Style}>Our Mission</h2>
          <p>
            At <strong>Krishi Vishwas</strong>, we are dedicated to supporting farmers and the agricultural community.
            We believe in a sustainable future where traditional practices meet modern technology.
            From real-time news updates to market trends, we bring vital information directly to farmers' fingertips.
          </p>

          <h2 style={heading2Style}>Why Krishi Vishwas?</h2>
          <ul style={ulStyle}>
            <li style={liStyle}>🌾 Real-time Agriculture News & Updates</li>
            <li style={liStyle}>🌱 Organic Farming Insights & Market Trends</li>
            <li style={liStyle}>🚜 Easy Access to Government Schemes & Subsidies</li>
            <li style={liStyle}>📈 Farmer-Focused Data & Analytics</li>
          </ul>

          <h2 style={heading2Style}>Join Us</h2>
          <p>
            Be part of a growing community dedicated to revolutionizing agriculture in India.
            Together, we can create a future where every farmer thrives!
          </p>
          <p><strong>📞 Contact:</strong> +91-9876543210</p>
          <p><strong>📧 Email:</strong> support@krishivishwas.in</p>
        </div>

        <div style={imageStyle}>
          <img
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
            alt="Farming Community"
            style={imgStyle}
          />
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© 2025 Krishi Vishwas | Growing Together 🌿</p>
      </footer>
    </div>
  );
};

export default About;
