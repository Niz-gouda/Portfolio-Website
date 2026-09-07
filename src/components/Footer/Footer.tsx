import { Terminal, Briefcase, Mail, ExternalLink } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container-narrow section-pad" style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
        <div className="footer-top">
          <div>
            <p className="font-display text-xl font-bold">Nischalgouda Patil<span className="text-primary">.</span></p>
            <p className="mt-2 text-sm text-muted max-w-md">Building production-ready AI systems: RAG, agents, and full-stack enterprise products.</p>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/Nischalgouda" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
              <Terminal size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nischalgouda-patil-39b439279/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
              <Briefcase size={20} />
            </a>
            <a href="https://leetcode.com/u/Nischalgouda2/" target="_blank" rel="noreferrer" aria-label="LeetCode" className="social-icon">
              <ExternalLink size={20} />
            </a>
            <a href="mailto:nischalgouda11@gmail.com" aria-label="Email" className="social-icon">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nischalgouda Patil. All rights reserved.</p>
          <p className="font-mono">AI Engineer · Full Stack · Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
