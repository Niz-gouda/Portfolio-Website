import './About.css';

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <div className="animate-fade-in">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">Engineer who ships <span className="gradient-text">production AI</span></h2>
          <p className="section-lead">
            I'm a full-stack engineer who builds scalable LLM systems. I led the architecture for ZiniosEdge's production AI system, cutting costs by 85% and support query volume by 60%. I work across the full stack: React and TypeScript to ASP.NET Core and PostgreSQL.
          </p>
        </div>

        <div className="about-grid mt-12">
          <div className="glass-card about-card main-card animate-fade-in delay-100">
            <div className="about-card-content">
              <h3 className="about-card-title">Profile Snapshot</h3>
              <div className="profile-details">
                <p><span>Name:</span> Nischalgouda Patil</p>
                <p><span>Role:</span> Associate Software Engineer</p>
                <p><span>Company:</span> ZiniosEdge Software Technologies</p>
                <p><span>Location:</span> Bengaluru, India</p>
                <p><span>Education:</span> B.E. Information Science, KLS Gogte Institute of Technology</p>
              </div>
            </div>
          </div>

          <div className="about-sub-grid">
            <div className="glass-card about-card animate-fade-in delay-200">
              <div className="about-card-content">
                <h3 className="about-card-title">Core Strengths</h3>
                <p className="about-card-desc">
                  LLM orchestration, context management, token optimization, prompt engineering, agent harnesses, and building multi-tenant chatbots.
                </p>
              </div>
            </div>
            <div className="glass-card about-card animate-fade-in delay-300">
              <div className="about-card-content">
                <h3 className="about-card-title">Full Stack Excellence</h3>
                <p className="about-card-desc">
                  React 18, TypeScript, ASP.NET Core, Node.js. Delivering D3.js dashboards, Zustand state management, and real-time APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
