import { useState } from 'react';
import Folder from '../components/Folder';

const About = () => {
  const [selectedFact, setSelectedFact] = useState(null);

  const funFacts = [
    {
      id: 1,
      title: "Guinness World Record",
      shortDesc: "5,000+ dancers",
      fullContent: "Coordinated with 5,000+ dancers to set a world record — because when I scale, I scale BIG."
    },
    {
      id: 2,
      title: "Classical Kuchipudi Dancer",
      shortDesc: "Precision in performance",
      fullContent: "Precision in performance translates to precision in code. Debugging choreography = debugging algorithms."
    },
    {
      id: 3,
      title: "Survived 23 Credits",
      shortDesc: "Time management champion",
      fullContent: "Time management under pressure? Check. ✓ Thriving in chaos? Also check. ✓"
    },
    {
      id: 4,
      title: "Women's Safety Advocate",
      shortDesc: "She Team trainer",
      fullContent: "Certified trainer with She Team — building safer communities, one training session at a time."
    }
  ];

  return (
    <section id="about" className="section scroll-reveal">
      <h3>About Me</h3>

      <div style={{ maxWidth: '850px' }}>
        {/* Current Status Badge - NO PULSE, clean and static */}
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
          <span style={{ color: '#5a7565', fontWeight: '600', fontSize: '0.95rem' }}>
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

        {/* Info Cards with Float Animation */}
        <div style={{ 
          marginTop: '2.5rem', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {[
            { icon: '🎓', title: 'Education', value: 'UC Berkeley', color: '#7c9885' },
            { icon: '💼', title: 'Experience', value: 'Software Developer', color: '#b4a5a5' },
            { icon: '🚀', title: 'Focus', value: 'Backend Systems', color: '#e8b4b8' }
          ].map((item, idx) => (
            <div key={idx} style={{
              background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
              borderRadius: '16px',
              padding: '2rem',
              border: `1px solid ${item.color}30`,
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              animation: `float 3s ease-in-out ${idx * 0.2}s infinite`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) scale(1.05)';
              e.currentTarget.style.boxShadow = `0 15px 35px ${item.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>{item.icon}</div>
              <h4 style={{ color: '#2d3436', marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: '600' }}>{item.title}</h4>
              <p style={{ fontSize: '0.95rem', margin: 0, color: item.color, fontWeight: '500' }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* React Bits Folder Component for Fun Facts */}
        <div style={{
          marginTop: '3rem',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid #e8e4d9',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <h4 style={{ 
            color: '#5a7565', 
            fontSize: '1.2rem', 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '600'
          }}>
            <span style={{ fontSize: '1.5rem' }}>✨</span>
            Fun Facts
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '400', marginLeft: '0.5rem' }}>
              (Click the folders!)
            </span>
          </h4>
          
          {/* Folders Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {funFacts.map((fact) => (
              <div 
                key={fact.id} 
                onClick={() => setSelectedFact(selectedFact === fact.id ? null : fact.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {/* Clean folder - no text inside */}
                <Folder 
                  color={selectedFact === fact.id ? "#7c9885" : "#b4a5a5"} 
                  size={1}
                  items={[null, null, null]} // Empty papers
                />
                
                {/* Text below folder */}
                <div style={{ textAlign: 'center' }}>
                  <h5 style={{
                    color: '#2d3436',
                    fontSize: '0.95rem',
                    margin: '0 0 0.3rem 0',
                    fontWeight: '600'
                  }}>
                    {fact.title}
                  </h5>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '0.85rem',
                    margin: 0
                  }}>
                    {fact.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Selected fact details - shows below folders */}
          {selectedFact && (
            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(124, 152, 133, 0.08), rgba(232, 180, 184, 0.05))',
              borderRadius: '12px',
              border: '1px solid rgba(124, 152, 133, 0.2)',
              animation: 'fadeIn 0.3s ease'
            }}>
              <h5 style={{
                color: '#2d3436',
                fontSize: '1.1rem',
                marginBottom: '0.8rem',
                fontWeight: '600'
              }}>
                {funFacts.find(f => f.id === selectedFact)?.title}
              </h5>
              <p style={{
                color: '#4a5568',
                fontSize: '1rem',
                margin: 0,
                lineHeight: '1.6'
              }}>
                {funFacts.find(f => f.id === selectedFact)?.fullContent}
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;