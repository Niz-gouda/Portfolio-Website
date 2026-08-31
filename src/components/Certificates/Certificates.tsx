import './Certificates.css';
import { Award, Trophy, Code2, Users, Flame } from 'lucide-react';

export function Certificates() {
  const items = [
    { title: 'LeetCode — 200+ Problems Solved', subtitle: 'Arrays, Trees, Graphs', icon: Code2 },
    { title: 'NPTEL — DSA with Java (Elite / 1st Class)', subtitle: 'IIT Kharagpur · 2024', icon: Award },
    { title: 'National Debate Winner', subtitle: 'National Championship · 2022', icon: Trophy },
    { title: 'Battle of Bands Winner', subtitle: 'State Level · 2024', icon: Flame },
    { title: 'Co-Founder — Social Experiences Venture', subtitle: '400+ participants across cities', icon: Users },
    { title: 'ACM PR Head & Rotaract President', subtitle: 'Boosted community reach by 40%', icon: Users },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...items, ...items];

  return (
    <section className="certificates-section">
      <div className="container-narrow">
        <div className="text-center mb-6">
          <p className="section-eyebrow">Certifications &amp; Achievements</p>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="certificate-card">
                <div className="cert-icon-box">
                  <Icon size={18} />
                </div>
                <div className="cert-info">
                  <div className="cert-title">{item.title}</div>
                  <div className="cert-subtitle">{item.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
