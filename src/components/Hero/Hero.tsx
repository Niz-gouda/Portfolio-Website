import { Download, Sparkles } from 'lucide-react';
import profileImg from '../../assets/Nischal Portfolio.jpeg';
import './Hero.css';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="bg-hero-radial hero-bg"></div>
      <div className="bg-grid-fade hero-grid"></div>

      <div className="container-narrow hero-content">
        <div className="hero-text-area animate-fade-in">
          <p className="section-eyebrow">Production AI Systems · Full Stack</p>
          <h1 className="hero-title">Nischalgouda Patil</h1>
          <div className="hero-subtitle">
            <span className="gradient-text">AI-focused Full Stack Engineer</span>
            <span className="cursor-blink"></span>
          </div>
          <p className="hero-description">
            I design and ship production-ready LLM systems — from multi-tenant chatbot architectures to enterprise full-stack web platforms.
          </p>

          <div className="hero-actions">
            <a href="#" className="btn btn-primary">
              <Download size={18} />
              Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              <Sparkles size={18} />
              Hire Me
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <p className="stat-value">85%</p>
              <p className="stat-label">API Cost Reduction</p>
            </div>
            <div>
              <p className="stat-value">60%</p>
              <p className="stat-label">Support Query Drop</p>
            </div>
            <div>
              <p className="stat-value">AI + FS</p>
              <p className="stat-label">Production Focus</p>
            </div>
          </div>
        </div>

        <div className="hero-image-area animate-fade-in delay-200">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <div className="hero-image-card">
              <div className="profile-placeholder">
                <img src={profileImg} alt="Nischalgouda Patil" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% center' }} />
                <div className="profile-info">
                  <p className="profile-name">Nischalgouda Patil</p>
                  <p className="profile-role">AI Engineer & Full Stack</p>
                  <p className="profile-location">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
