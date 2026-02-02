import { useState } from 'react';

// IMPORT IMAGES PROPERLY FOR DEPLOYMENT
import javaPic from '../assets/github.png';
import springPic from '../assets/github.png';
import pythonPic from '../assets/github.png';
import postgresqlPic from '../assets/github.png';
import reactPic from '../assets/github.png';
import nodejsPic from '../assets/github.png';
import gitPic from '../assets/github.png';
import javascriptPic from '../assets/github.png';
import vercelPic from '../assets/github.png';
import awsPic from '../assets/github.png';
import flaskPic from '../assets/github.png';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Backend');

  const skillCategories = {
    Backend: {
      icon: "⚙️",
      color: '#7c9885',
      skills: ["Java", "Spring Boot", "Python", "Node.js", "REST APIs", "JWT Auth", "System Architecture", "API Design", "Flask" ]
    },
    Database: {
      icon: "🗄️",
      color: '#b4a5a5',
      skills: ["PostgreSQL", "SQL", "Database Design", "Query Optimization", "Data Modeling"]
    },
    Frontend: {
      icon: "🎨",
      color: '#e8b4b8',
      skills: ["JavaScript", "React", "HTML/CSS", "Responsive Design", "UI/UX Basics"]
    },
    Tools: {
      icon: "🛠️",
      color: '#7c9885',
      skills: ["Git", "GitHub", "Version Control", "Debugging", "Testing", "Vercel", "AWS"]
    }
  };

  const categories = Object.keys(skillCategories);

  // Tech logos with IMPORTED IMAGES
  const techLogos = [
    { name: "Java", image: javaPic },
    { name: "Spring Boot", image: springPic },
    { name: "Python", image: pythonPic },
    { name: "PostgreSQL", image: postgresqlPic },
    { name: "React", image: reactPic },
    { name: "Node.js", image: nodejsPic },
    { name: "Git", image: gitPic },
    { name: "JavaScript", image: javascriptPic },
    { name: "Vercel", image: vercelPic },
    { name: "AWS", image: awsPic },
    { name: "Flask", image: flaskPic }
  ];

  return (
    <section id="skills" className="section scroll-reveal">
      <h3>Skills & Technologies</h3>
      
      {/* Logo Loop - MORE COMPACT */}
      <div style={{
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(124, 152, 133, 0.05), rgba(232, 180, 184, 0.03))',
        borderRadius: '12px',
        padding: '1rem 0',
        marginBottom: '2.5rem',
        border: '1px solid #e8e4d9',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          animation: 'scroll 20s linear infinite',
          width: 'max-content'
        }}>
          {[...techLogos, ...techLogos, ...techLogos].map((tech, idx) => (
            <div key={idx} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              minWidth: '70px',
              opacity: 0.8,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              {/* IMPORTED IMAGE */}
              <img 
                src={tech.image} 
                alt={tech.name}
                style={{
                  width: '45px',
                  height: '45px',
                  objectFit: 'contain'
                }}
              />
              <span style={{ 
                fontSize: '0.8rem', 
                color: '#6b7280', 
                fontWeight: '500',
                textAlign: 'center'
              }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabbed Interface */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              style={{
                padding: '0.8rem 1.5rem',
                background: activeTab === category ? skillCategories[category].color : '#ffffff',
                color: activeTab === category ? '#fefcf3' : skillCategories[category].color,
                border: `2px solid ${skillCategories[category].color}`,
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transform: activeTab === category ? 'scale(1.05)' : 'scale(1)',
                boxShadow: activeTab === category ? `0 4px 12px ${skillCategories[category].color}30` : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== category) {
                  e.target.style.background = `${skillCategories[category].color}15`;
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== category) {
                  e.target.style.background = '#ffffff';
                  e.target.style.transform = 'scale(1)';
                }
              }}
            >
              <span>{skillCategories[category].icon}</span>
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Tab Content with Slide Animation */}
        <div className="card" style={{
          minHeight: '250px',
          background: `linear-gradient(135deg, ${skillCategories[activeTab].color}08, rgba(124, 152, 133, 0.03))`,
          animation: 'slideIn 0.4s ease'
        }}>
          <h4 style={{
            color: skillCategories[activeTab].color,
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.8rem',
            fontWeight: '700'
          }}>
            <span style={{ fontSize: '2.5rem' }}>{skillCategories[activeTab].icon}</span>
            <span>{activeTab}</span>
          </h4>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            justifyContent: 'center'
          }}>
            {skillCategories[activeTab].skills.map((skill, i) => (
              <span
                key={i}
                style={{
                  background: '#ffffff',
                  color: skillCategories[activeTab].color,
                  padding: '0.7rem 1.3rem',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  border: `2px solid ${skillCategories[activeTab].color}`,
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease ${i * 0.05}s forwards`
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = skillCategories[activeTab].color;
                  e.target.style.color = '#fefcf3';
                  e.target.style.transform = 'scale(1.1) translateY(-2px)';
                  e.target.style.boxShadow = `0 6px 16px ${skillCategories[activeTab].color}30`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffffff';
                  e.target.style.color = skillCategories[activeTab].color;
                  e.target.style.transform = 'scale(1) translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Box */}
      <div className="card" style={{ 
        marginTop: '3rem', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(124, 152, 133, 0.08), rgba(232, 180, 184, 0.05))',
        borderLeft: '4px solid #7c9885'
      }}>
        <p style={{ 
          fontSize: '1.15rem', 
          color: '#4a5568',
          margin: 0,
          fontStyle: 'italic',
          lineHeight: '1.8'
        }}>
          Focused on backend architecture, but comfortable across the full stack when needed
        </p>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
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

export default Skills;