const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/saineethubonagiri",
      icon: "🐙"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/saineethubonagiri",
      icon: "💼"
    },
    {
      name: "Email",
      url: "mailto:saineethubonagiri@gmail.com",
      icon: "📧"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer style={{
      background: '#f8f5ed',
      borderTop: '1px solid #e8e4d9',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem 1.5rem'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* About Section */}
          <div>
            <h4 style={{
              color: '#2d3436',
              fontSize: '1.3rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #7c9885, #b4a5a5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Sai Neethu Bonagiri
            </h4>
            <p style={{
              color: '#6b7280',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              margin: 0
            }}>
              Backend-focused Software Engineer passionate about building scalable systems and solving real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 style={{
              color: '#4a5568',
              fontSize: '1rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: '600'
            }}>
              Quick Links
            </h5>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#6b7280',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#7c9885';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h5 style={{
              color: '#4a5568',
              fontSize: '1rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: '600'
            }}>
              Connect
            </h5>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    color: '#6b7280',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#7c9885';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6b7280';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #e8e4d9, transparent)',
          margin: '2rem 0'
        }}></div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '0.9rem',
            margin: 0
          }}>
            &copy; {currentYear} Saineethu Bonagiri. All rights reserved.
          </p>
          <p style={{
            color: '#6b7280',
            fontSize: '0.85rem',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            Built with{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #7c9885, #b4a5a5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '600'
            }}>
              React
            </span>
            {' '}& <span style={{ color: '#e8b4b8' }}>❤️</span>
          </p>
        </div>

        {/* Back to Top Button */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'rgba(124, 152, 133, 0.1)',
              border: '2px solid #7c9885',
              color: '#7c9885',
              padding: '0.7rem 1.5rem',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #7c9885, #b4a5a5)';
              e.target.style.color = '#fefcf3';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 16px rgba(124, 152, 133, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(124, 152, 133, 0.1)';
              e.target.style.color = '#7c9885';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <span>Back to Top</span>
            <span style={{ fontSize: '1.2rem' }}>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;