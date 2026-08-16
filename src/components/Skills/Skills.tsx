import { Search } from 'lucide-react';
import './Skills.css';

export function Skills() {
  const skills = [
    {
      category: 'AI / LLM',
      items: ['OpenAI API', 'OpenRouter', 'LLM orchestration', 'Context management', 'Token optimisation', 'Prompt engineering', 'Agent harnesses', 'NLP', 'Chatbot architectures']
    },
    {
      category: 'Frontend',
      items: ['React 18', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'D3.js', 'Zustand', 'Context API', 'Redux', 'React-PDF']
    },
    {
      category: 'Backend',
      items: ['ASP.NET Core', 'Node.js', 'REST APIs', '.NET Framework', 'Microservices']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Entity Framework Core']
    },
    {
      category: 'Cloud & DevOps',
      items: ['Azure', 'AWS', 'GCP', 'Docker', 'Git', 'CI/CD', 'Jenkins', 'Jira']
    },
    {
      category: 'Languages & Tools',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'SQL', 'C++', 'Claude Code', 'Cursor', 'Codex']
    }
  ];

  return (
    <section id="skills" className="section-pad relative" style={{background: 'rgba(7, 13, 28, 0.6)'}}>
      <div className="container-narrow">
        <div className="animate-fade-in">
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">Stack built for <span className="gradient-text">enterprise AI</span></h2>
          <p className="section-lead">From LLM orchestration and retrieval to full-stack backends and React product surfaces.</p>
        </div>

        <div className="skills-search animate-fade-in delay-100">
          <Search className="search-icon" size={18} />
          <input type="text" placeholder="Search skills..." className="search-input" />
        </div>

        <div className="skills-grid mt-10">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className={`glass-card skill-card animate-fade-in delay-200`}>
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((item) => (
                  <span key={item} className="badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
