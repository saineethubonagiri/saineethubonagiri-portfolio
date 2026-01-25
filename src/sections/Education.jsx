const Education = () => {
  return (
    <section id="education" className="section">
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
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginTop: '0.8rem'
            }}>
              <p style={{ 
                color: '#b4a5a5',
                margin: 0,
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                Class of 2024
              </p>
              <p style={{ 
                color: '#e8b4b8',
                margin: 0,
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                GPA: 3.77
              </p>
            </div>
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

      {/* Beyond Code Section */}
      <div style={{ marginTop: '4rem' }}>
        <h3 style={{ 
          fontSize: '2rem',
          marginBottom: '2rem',
          color: '#2d3436',
          position: 'relative',
          display: 'inline-block'
        }}>
          Beyond Code
        </h3>
        <div style={{
          content: '',
          position: 'absolute',
          bottom: '-10px',
          left: 0,
          width: '60%',
          height: '4px',
          background: 'linear-gradient(90deg, #7c9885, #e8b4b8)',
          borderRadius: '2px'
        }}></div>
        
        <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
          {/* Hackathon Win */}
          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(124, 152, 133, 0.05), rgba(180, 165, 165, 0.03))',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(124, 152, 133, 0.12)';
            e.currentTarget.style.borderColor = '#7c9885';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.borderColor = '#e8e4d9';
          }}>
            <div style={{ fontSize: '3rem', minWidth: '60px', textAlign: 'center' }}>
              🏆
            </div>
            <div>
              <h5 style={{
                color: '#2d3436',
                fontSize: '1.2rem',
                marginBottom: '0.4rem',
                fontWeight: '600'
              }}>
                Hackathon Winner
              </h5>
              <p style={{ 
                color: '#4a5568', 
                margin: 0,
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                First place winner at competitive coding hackathon
              </p>
            </div>
          </div>

          {/* Guinness World Record */}
          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(232, 180, 184, 0.05), rgba(124, 152, 133, 0.03))',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(232, 180, 184, 0.12)';
            e.currentTarget.style.borderColor = '#e8b4b8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.borderColor = '#e8e4d9';
          }}>
            <div style={{ fontSize: '3rem', minWidth: '60px', textAlign: 'center' }}>
              🌟
            </div>
            <div>
              <h5 style={{
                color: '#2d3436',
                fontSize: '1.2rem',
                marginBottom: '0.4rem',
                fontWeight: '600'
              }}>
                Guinness World Record Holder
              </h5>
              <p style={{ 
                color: '#4a5568', 
                margin: 0,
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                Recognized for exceptional achievement in dance performance
              </p>
            </div>
          </div>

          {/* She Team Volunteer */}
          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(180, 165, 165, 0.05), rgba(232, 180, 184, 0.03))',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(180, 165, 165, 0.12)';
            e.currentTarget.style.borderColor = '#b4a5a5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.borderColor = '#e8e4d9';
          }}>
            <div style={{ fontSize: '3rem', minWidth: '60px', textAlign: 'center' }}>
              💪
            </div>
            <div>
              <h5 style={{
                color: '#2d3436',
                fontSize: '1.2rem',
                marginBottom: '0.4rem',
                fontWeight: '600'
              }}>
                Women Empowerment Volunteer
              </h5>
              <p style={{ 
                color: '#4a5568', 
                margin: 0,
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                Certified trainer with She Team, promoting women's safety and empowerment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;