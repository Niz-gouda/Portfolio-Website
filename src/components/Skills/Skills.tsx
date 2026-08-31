import { useState } from 'react';
import { Search } from 'lucide-react';
import './Skills.css';

export function Skills() {
  const [searchTerm, setSearchTerm] = useState('');

  const skills = [
    {
      category: 'AI / LLM Engineering',
      items: ['OpenAI API', 'OpenRouter', 'LLM orchestration', 'Context management', 'Token optimisation', 'Prompt engineering', 'Agent harnesses', 'NLP', 'Chatbot architectures']
    },
    {
      category: 'Frontend Architecture',
      items: ['React 18', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'D3.js', 'Zustand', 'Context API', 'Redux', 'React-PDF']
    },
    {
      category: 'Backend & Microservices',
      items: ['ASP.NET Core', 'Node.js', 'REST APIs', '.NET Framework', 'Microservices', 'FastAPI']
    },
    {
      category: 'Databases & Storage',
      items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Entity Framework Core']
    },
    {
      category: 'Cloud, DevOps & Infra',
      items: ['Azure', 'AWS', 'GCP', 'Docker', 'Git', 'CI/CD', 'Jenkins', 'Jira']
    },
    {
      category: 'Languages & AI Tooling',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'SQL', 'C++', 'Claude Code', 'Cursor', 'Codex']
    }
  ];

  const filteredSkills = skills.map(group => ({
    ...group,
    items: group.items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(group => group.items.length > 0);

  return (
    <section id="skills" className="section-pad relative">
      <div className="container-narrow">
        <div className="animate-fade-in">
          <p className="section-eyebrow">Skills &amp; Capabilities</p>
          <h2 className="section-title">Technical stack built for <span className="gradient-text">scale</span></h2>
          <p className="section-lead">From LLM orchestration and retrieval to scalable backend services and responsive client surfaces.</p>
        </div>

        <div className="skills-search animate-fade-in delay-100">
          <Search className="search-icon" size={16} />
          <input
            type="text"
            placeholder="Filter skills (React, OpenAI, Docker...)"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="skills-grid mt-10">
          {filteredSkills.map((skillGroup) => (
            <div key={skillGroup.category} className="glass-card skill-card animate-fade-in delay-200">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((item) => (
                  <span key={item} className="tech-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
