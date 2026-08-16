import './Projects.css';

export function Projects() {
  const projects = [
    {
      title: 'AI Chatbot Platform',
      tech: 'OpenAI · OpenRouter · React · PostgreSQL',
      desc: 'Production-grade, multi-tenant-ready chatbot with context management, intent recognition, and fallback LLM routing. Achieved 85% API cost reduction — the company\'s first AI product.'
    },
    {
      title: 'Desktop Voice-Assistant',
      tech: 'Python · NLP',
      desc: 'Agent-style automation harness integrating NLP, voice recognition, and workflow management — bridges natural language to executable system actions.'
    },
    {
      title: 'EdTech Platform Modernisation',
      tech: 'React 18 · TypeScript · D3.js · ASP.NET Core',
      desc: 'Full migration from WordPress to React 18 with D3.js real-time/historical dashboards, automated PDF reporting, and Zustand state management.'
    },
    {
      title: 'Email Administration Application',
      tech: 'Java · OOP · Design Patterns',
      desc: 'Multi-tiered app for user accounts, email aliases, and distribution lists; implemented Factory and Strategy design patterns.'
    }
  ];

  return (
    <section id="projects" className="section-pad relative" style={{background: 'rgba(7, 13, 28, 0.6)'}}>
      <div className="container-narrow">
        <div className="animate-fade-in">
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Systems that prove <span className="gradient-text">AI in production</span></h2>
          <p className="section-lead">Enterprise AI case studies spanning chatbot platforms and document intelligence.</p>
        </div>

        <div className="projects-grid mt-10">
          {projects.map((project, index) => (
            <div key={index} className="glass-card project-card animate-fade-in delay-200">
              <div className="project-content">
                <span className="badge mb-4">{project.tech}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
