// VERSION A: Full width underline (100%)

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "saineethubonagiri@gmail.com",
      link: "mailto:saineethubonagiri@gmail.com",
      color: { bg: 'rgba(124, 152, 133, 0.08)', border: 'rgba(124, 152, 133, 0.2)', hover: '#7c9885' }
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/saineethubonagiri",
      link: "https://linkedin.com/in/saineethubonagiri",
      color: { bg: 'rgba(180, 165, 165, 0.08)', border: 'rgba(180, 165, 165, 0.2)', hover: '#b4a5a5' }
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/saineethubonagiri",
      link: "https://github.com/saineethubonagiri",
      color: { bg: 'rgba(232, 180, 184, 0.08)', border: 'rgba(232, 180, 184, 0.2)', hover: '#e8b4b8' }
    }
  ];

  return (
    <section id="contact" className="section">
      {/* FULL WIDTH UNDERLINE VERSION */}
      <h3 style={{
        fontSize: '2.5rem',
        marginBottom: '3rem',
        color: '#2d3436',
        position: 'relative',
        display: 'block',
        width: '100%'
      }}>
        Get In Touch
        <span style={{
          content: '',
          position: 'absolute',
          bottom: '-10px',
          left: 0,
          width: '100%',
          height: '4px',
          background: 'linear-gradient(90deg, #7c9885, #e8b4b8)',
          borderRadius: '2px',
          display: 'block'
        }}></span>
      </h3>
      
      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
        <p style={{ 
          fontSize: '1.2rem', 
          textAlign: 'center', 
          marginBottom: '3rem',
          color: '#4a5568',
          lineHeight: '1.8'
        }}>
          I'm currently open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div style={{ 
          display: 'grid', 
          gap: '1.2rem',
          marginBottom: '3rem'
        }}>
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className="card" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem',
                cursor: 'pointer',
                background: method.color.bg,
                borderColor: method.color.border,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.boxShadow = `0 8px 24px ${method.color.bg}`;
                e.currentTarget.style.borderColor = method.color.hover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = method.color.border;
              }}>
                <div style={{ 
                  fontSize: '2.8rem',
                  minWidth: '70px',
                  textAlign: 'center'
                }}>
                  {method.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: '#6b7280', 
                    fontSize: '0.85rem',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: '600'
                  }}>
                    {method.label}
                  </h4>
                  <p style={{ 
                    color: method.color.hover, 
                    fontSize: '1.1rem',
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    {method.value}
                  </p>
                </div>
                <div style={{ 
                  color: method.color.hover,
                  fontSize: '1.8rem'
                }}>
                  →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pro Tip Box */}
        <div className="card" style={{ 
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(124, 152, 133, 0.08), rgba(232, 180, 184, 0.05))',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <p style={{ 
            fontSize: '1.1rem',
            color: '#4a5568',
            margin: 0,
            lineHeight: '1.7'
          }}>
            <span style={{ fontSize: '1.3rem', marginRight: '0.5rem' }}>💡</span>
            <strong style={{ color: '#2d3436', fontWeight: '600' }}>Pro tip:</strong> The best way to reach me is via email. 
            I typically respond within 24 hours!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;