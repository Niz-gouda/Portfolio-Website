import './Experience.css';

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Associate Software Engineer',
      company: 'ZiniosEdge Software Technologies Pvt. Ltd.',
      location: 'Bengaluru',
      date: 'Oct 2025 – Present',
      points: [
        'Designed and shipped the company\'s first production AI chatbot architecture (OpenAI & OpenRouter) — multi-tenant-ready, with context management, intent recognition, and token optimisation — cutting API costs by 85% with zero quality degradation.',
        'Engineered multi-provider LLM routing with automatic fallback for reliability; instrumented a telemetry layer tracking query types, resolution rates, and API spend for ongoing cost control.',
        'Owned migration of legacy WordPress EdTech platform to React 18 + TypeScript, delivering D3.js dashboards, Zustand state management, and automated PDF reporting.',
        'Built and secured scalable REST APIs with role-based auth, file storage, and optimised PostgreSQL queries powering AI-facing front-ends.',
        'Lead internal AI tooling adoption org-wide — evaluated and introduced Kiro, Cursor, and Claude Code; measurably improving development velocity.'
      ]
    },
    {
      id: 2,
      role: 'Software Developer Intern',
      company: 'ZiniosEdge Software Technologies Pvt. Ltd.',
      location: 'Bengaluru',
      date: 'Feb 2025 – Sep 2025',
      points: [
        'Led full-stack development of an enterprise Letter Management Portal (React, TypeScript, ASP.NET Core), serving 100+ users.',
        'Designed and shipped the company\'s first production AI system — an OpenRouter-integrated support chatbot — reducing support query volume by 60%.',
        'Built real-time analytics dashboards with PostgreSQL integration; extended client platform with D3.js visualisation components.',
        'Participated in code reviews, sprint planning, and retrospectives across the full SDLC.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-pad relative">
      <div className="container-narrow">
        <div className="animate-fade-in">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Career <span className="gradient-text">timeline</span></h2>
        </div>

        <div className="timeline mt-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item animate-fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="badge">{exp.date}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
