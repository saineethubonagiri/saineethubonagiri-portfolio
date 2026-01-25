const Experience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "XYZ Inc.",
      type: "Volunteer",
      period: "Present",
      project: "Expense Tracker",
      description: "Volunteering to build a comprehensive backend system for managing user financial data and workflows while learning industry best practices",
      highlights: [
        "Designed RESTful APIs and database schemas using Spring Boot and PostgreSQL",
        "Implemented secure authentication and authorization flows for multi-user access",
        "Built scalable backend logic to handle real-time expense tracking and reporting",
        "Created comprehensive data models for financial transactions and user management"
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "JWT Auth"],
      github: "https://github.com/saineethubonagiri/expense-tracker", // Replace with actual repo
      live: "https://your-app.herokuapp.com" // Replace with actual deployment or set to null
    }
  ];

  return (
    <section id="experience" className="section">
      <h3>Experience</h3>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="card">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              flexWrap: 'wrap', 
              gap: '1rem',
              marginBottom: '1rem' 
            }}>
              <div style={{ flex: 1, minWidth: '250px' }}>
                <h4 style={{ 
                  color: '#2d3436', 
                  fontSize: '1.5rem', 
                  marginBottom: '0.4rem',
                  fontWeight: '700'
                }}>
                  {exp.role}
                </h4>
                <p style={{ 
                  color: '#7c9885', 
                  margin: '0 0 0.5rem 0', 
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>
                  {exp.company}
                </p>
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ 
                    color: '#6b7280', 
                    fontSize: '0.95rem',
                    background: 'rgba(124, 152, 133, 0.1)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '6px',
                    fontWeight: '500'
                  }}>
                    {exp.type}
                  </span>
                  <span style={{ 
                    color: '#b4a5a5', 
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    • {exp.project}
                  </span>
                </div>
              </div>
              <span style={{ 
                color: '#e8b4b8', 
                fontSize: '0.95rem',
                fontWeight: '500'
              }}>
                {exp.period}
              </span>
            </div>
            
            <p style={{
              color: '#4a5568',
              fontSize: '1.05rem',
              marginBottom: '1.5rem',
              lineHeight: '1.7'
            }}>
              {exp.description}
            </p>
            
            <ul style={{ 
              color: '#4a5568', 
              paddingLeft: '1.5rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              {exp.highlights.map((highlight, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{highlight}</li>
              ))}
            </ul>
            
            {/* Tech Stack */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.tech.map(tech => (
                  <span key={tech} style={{
                    background: 'rgba(124, 152, 133, 0.12)',
                    color: '#7c9885',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    border: '1px solid rgba(124, 152, 133, 0.25)',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {exp.github && (
                <a
                  href={exp.github}
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
              
              {exp.live && (
                <a
                  href={exp.live}
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
      </div>
    </section>
  );
};

export default Experience;