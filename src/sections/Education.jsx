const Education = () => {
  return (
    <section id="education" className="section scroll-reveal">
      <h3>Education</h3>
      
      {/* Education Card */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ 
            fontSize: '4rem'
          }}>
            🎓
          </div>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h4 style={{ 
              color: '#2d3436', 
              fontSize: '1.7rem', 
              marginBottom: '0.5rem',
              fontWeight: '700'
            }}>
              Bachelor of Science in Computer Science
            </h4>
            <p style={{ 
              color: '#7c9885', 
              fontSize: '1.3rem',
              margin: '0.5rem 0',
              fontWeight: '600'
            }}>
              University of California, Berkeley
            </p>
            <div style={{ 
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '0.8rem',
              alignItems: 'center'
            }}>
              <span style={{ 
                color: '#b4a5a5',
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                Class of 2024
              </span>
              <span style={{
                width: '4px',
                height: '4px',
                background: '#cbd5e1',
                borderRadius: '50%'
              }}></span>
              <span style={{ 
                color: '#e8b4b8',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                GPA: 3.77
              </span>
              <span style={{
                width: '4px',
                height: '4px',
                background: '#cbd5e1',
                borderRadius: '50%'
              }}></span>
              <span style={{ 
                color: '#7c9885',
                fontSize: '1rem',
                fontWeight: '600',
                fontStyle: 'italic'
              }}>
                Cum Laude
              </span>
            </div>
          </div>
        </div>
        
        {/* Hackathon Achievement */}
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(124, 152, 133, 0.08), rgba(232, 180, 184, 0.05))',
          borderRadius: '12px',
          border: '1px solid rgba(124, 152, 133, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <span style={{ fontSize: '2rem' }}>🏆</span>
          <div>
            <h5 style={{
              color: '#2d3436',
              fontSize: '1rem',
              margin: '0 0 0.3rem 0',
              fontWeight: '600'
            }}>
              Hackathon Winner
            </h5>
            <p style={{
              color: '#4a5568',
              fontSize: '0.9rem',
              margin: 0,
              lineHeight: '1.5'
            }}>
              First place at competitive coding hackathon — built working solutions under tight deadlines
            </p>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e8e4d9'
        }}>
          <h5 style={{ 
            color: '#4a5568', 
            fontSize: '1rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Relevant Coursework
          </h5>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.6rem' 
          }}>
            {[
              'Data Structures',
              'Algorithms',
              'Database Systems',
              'Software Engineering',
              'Computer Architecture',
              'Operating Systems'
            ].map(course => (
              <span key={course} style={{
                background: 'rgba(124, 152, 133, 0.08)',
                color: '#4a5568',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                border: '1px solid rgba(124, 152, 133, 0.15)'
              }}>
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;