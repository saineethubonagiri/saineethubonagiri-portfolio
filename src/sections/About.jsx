const About = () => {
  return (
    <section id="about" className="section">
      <h3>About Me</h3>

      <div style={{ maxWidth: '850px' }}>
        {/* Current Status Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'linear-gradient(135deg, rgba(124, 152, 133, 0.15), rgba(232, 180, 184, 0.1))',
          padding: '0.6rem 1.2rem',
          borderRadius: '50px',
          border: '1px solid rgba(124, 152, 133, 0.3)',
          marginBottom: '2rem'
        }}>
          <span style={{ fontSize: '1.2rem' }}>🚀</span>
          <span style={{ color: '#7c9885', fontWeight: '600', fontSize: '0.95rem' }}>
            Currently volunteering at XYZ Inc. while seeking full-time opportunities
          </span>
        </div>

        <p>
          I'm a recent graduate and Volunteer Software Developer at <strong>XYZ Inc.</strong>, 
          building production-grade systems from scratch while learning industry best practices.
        </p>

        <p>
          My work centers on backend systems — designing APIs, databases,
          authentication flows, and scalable logic using Java, Spring Boot,
          Python, and PostgreSQL.
        </p>

        <p>
          I care about clarity, correctness, and shipping working systems —
          not demos. Every line of code I write is focused on solving real
          problems for real users.
        </p>

        {/* Info Cards */}
        <div style={{ 
          marginTop: '2.5rem', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem' 
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(124, 152, 133, 0.1), rgba(180, 165, 165, 0.05))',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(124, 152, 133, 0.2)',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(124, 152, 133, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🎓</div>
            <h4 style={{ color: '#2d3436', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Education</h4>
            <p style={{ fontSize: '0.95rem', margin: 0, color: '#7c9885' }}>UC Berkeley</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(180, 165, 165, 0.1), rgba(232, 180, 184, 0.05))',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(180, 165, 165, 0.2)',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(180, 165, 165, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>💼</div>
            <h4 style={{ color: '#2d3436', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Experience</h4>
            <p style={{ fontSize: '0.95rem', margin: 0, color: '#b4a5a5' }}>Software Developer</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(232, 180, 184, 0.1), rgba(124, 152, 133, 0.05))',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(232, 180, 184, 0.2)',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(232, 180, 184, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🚀</div>
            <h4 style={{ color: '#2d3436', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Focus</h4>
            <p style={{ fontSize: '0.95rem', margin: 0, color: '#e8b4b8' }}>Backend Systems</p>
          </div>
        </div>

        {/* Fun Facts */}
        <div style={{
          marginTop: '3rem',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid #e8e4d9',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <h4 style={{ 
            color: '#2d3436', 
            fontSize: '1.2rem', 
            marginBottom: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>✨</span>
            Fun Facts
          </h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: '0.8rem'
          }}>
            <li style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.8rem',
              color: '#4a5568'
            }}>
              <span style={{ fontSize: '1.3rem' }}>🌟</span>
              <span>Guinness World Record holder (yes, really!) — performed with ~5,000 dancers</span>
            </li>
            <li style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.8rem',
              color: '#4a5568'
            }}>
              <span style={{ fontSize: '1.3rem' }}>💃</span>
              <span>Classical Kuchipudi dancer — can debug code and dance in sync!</span>
            </li>
            <li style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.8rem',
              color: '#4a5568'
            }}>
              <span style={{ fontSize: '1.3rem' }}>🎯</span>
              <span>Berkeley grad passionate about solving real-world problems</span>
            </li>
            <li style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.8rem',
              color: '#4a5568'
            }}>
              <span style={{ fontSize: '1.3rem' }}>📚 </span>
              <span>Survived a 23-credit semester with mostly A’s 💪</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;