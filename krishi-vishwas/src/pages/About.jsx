import React from 'react';

const About = () => {
  const pageStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    color: '#3b4b3f',
    background: 'url("https://img.freepik.com/free-photo/green-field-blue-sky_1232-4263.jpg") no-repeat center center/cover',
    minHeight: '100vh',
  };

  const headerStyle = {
    backgroundColor: 'rgba(0, 128, 0, 0.7)',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
  };

  const contentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: '20px',
    borderRadius: '10px',
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
    backgroundColor: 'rgba(0, 128, 0, 0.7)',
    color: '#fff',
    marginTop: '20px',
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
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>🌱 About Krishi Vishwas</h1>
        <p>Empowering farmers with trust, innovation, and sustainability.</p>
      </header>

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
        </div>

        <div style={imageStyle}>
          <img
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
            alt="Farming Community"
            style={imgStyle}
          />
        </div>
      </section>

      <footer style={footerStyle}>
        <p>© 2025 Krishi Vishwas | Growing Together 🌿</p>
      </footer>
    </div>
  );
};

export default About;
