const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker",
      subtitle: "Full-Stack Finance Management System",
      description: "A comprehensive finance management platform with robust backend architecture for tracking expenses, managing budgets, and generating financial insights for real users.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "JWT Auth", "React"],
      highlights: [
        "Multi-user authentication and role-based authorization",
        "Real-time expense tracking with automated categorization",
        "Budget management with smart alerts and notifications",
        "Comprehensive financial reporting and data visualization"
      ],
      github: "https://github.com/saineethubonagiri/expense-tracker", // Replace with actual repo
      live: "https://your-app.herokuapp.com" // Replace with actual deployment or set to null
    },
    // Add more projects as you build them
  ];

  return (
    <section id="projects" className="section">
      <h3>Projects</h3>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <span style={{ 
                color: '#b4a5a5', 
                fontSize: '2rem',
                fontWeight: 'bold',
                lineHeight: '1'
              }}>
                →
              </span>
              <div style={{ flex: 1 }}>
                <h4 style={{ 
                  color: '#2d3436', 
                  fontSize: '1.6rem', 
                  marginBottom: '0.3rem',
                  fontWeight: '700'
                }}>
                  {project.title}
                </h4>
                <p style={{
                  color: '#7c9885',
                  fontSize: '1rem',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {project.subtitle}
                </p>
              </div>
            </div>
            
            <p style={{ 
              fontSize: '1.05rem', 
              color: '#4a5568', 
              marginBottom: '1.5rem',
              lineHeight: '1.7'
            }}>
              {project.description}
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ 
                color: '#6b7280', 
                fontSize: '0.9rem', 
                marginBottom: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '600'
              }}>
                Key Features
              </h5>
              <ul style={{ 
                color: '#4a5568', 
                paddingLeft: '1.5rem',
                lineHeight: '1.8',
                marginBottom: '0'
              }}>
                {project.highlights.map((highlight, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            {/* Tech Stack */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map(tech => (
                  <span key={tech} style={{
                    background: 'rgba(180, 165, 165, 0.12)',
                    color: '#b4a5a5',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    border: '1px solid rgba(180, 165, 165, 0.25)',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.7rem 1.3rem',
                    background: '#ffffff',
                    border: '2px solid #7c9885',
                    borderRadius: '8px',
                    color: '#7c9885',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#7c9885';
                    e.currentTarget.style.color = '#fefcf3';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(124, 152, 133, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = '#7c9885';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>←→</span>
                  <span>View Code</span>
                </a>
              )}
              
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.7rem 1.3rem',
                    background: 'linear-gradient(135deg, #7c9885, #b4a5a5)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fefcf3',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #b4a5a5, #e8b4b8)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(124, 152, 133, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #7c9885, #b4a5a5)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>🌐</span>
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
        
        {/* Coming Soon Card - More Compact */}
        <div style={{
          textAlign: 'center',
          background: 'rgba(124, 152, 133, 0.05)',
          borderRadius: '12px',
          padding: '2rem',
          border: '2px dashed rgba(124, 152, 133, 0.25)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#7c9885';
          e.currentTarget.style.background = 'rgba(124, 152, 133, 0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(124, 152, 133, 0.25)';
          e.currentTarget.style.background = 'rgba(124, 152, 133, 0.05)';
        }}>
          <p style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🚧</p>
          <h4 style={{ 
            color: '#2d3436', 
            marginBottom: '0.3rem',
            fontSize: '1.2rem'
          }}>
            More Coming Soon
          </h4>
          <p style={{ 
            color: '#6b7280', 
            margin: 0,
            fontSize: '0.95rem'
          }}>
            Building more systems...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;