import './Certificates.css';
import { ExternalLink, Code2, Trophy, Flame, Compass, Users } from 'lucide-react';
import hackerrankCertPng from '../../assets/Hackerrank Rest API certificate.png';

interface CertificateItem {
  id: string;
  image: string;
  link: string;
  alt: string;
}

interface AchievementItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  highlight?: string;
  icon: any;
}

export function Certificates() {
  const certificates: CertificateItem[] = [
    {
      id: 'hackerrank-software-engineer',
      image: '/certificates/hackerrank-software engineer.png',
      link: 'https://www.hackerrank.com/certificates/7E5332333CD7',
      alt: 'HackerRank Software Engineer Role Certificate - Nischalgouda Patil',
    },
    {
      id: 'hackerrank-rest-api',
      image: hackerrankCertPng,
      link: 'https://www.hackerrank.com/certificates/BEFCD830BDC3',
      alt: 'HackerRank REST API (Intermediate) Certificate - Nischalgouda Patil',
    },
    {
      id: 'nptel-dsa-java',
      image: '/certificates/NPTEL DSA w JAVA.png',
      link: 'https://drive.google.com/file/d/16oecJsOpT74NuAAtRnoRgKPp1O62wiTg/view?usp=sharing',
      alt: 'NPTEL DSA with Java (Elite) Certificate - IIT Kharagpur',
    },
  ];

  const achievements: AchievementItem[] = [
    {
      id: 'leetcode',
      category: 'Problem Solving',
      title: 'LeetCode — 200+ Problems Solved',
      subtitle: 'Strong foundation in Data Structures, Trees, Graphs & Dynamic Programming algorithms.',
      highlight: '200+ Solved',
      icon: Code2,
    },
    {
      id: 'debate',
      category: 'Public Speaking',
      title: 'National Debate Winner',
      subtitle: '1st Place in National Championship against top collegiate debating institutions (2022).',
      highlight: 'National 1st',
      icon: Trophy,
    },
    {
      id: 'music',
      category: 'Extracurricular',
      title: 'Battle of Bands Winner',
      subtitle: 'State-Level Band Championship winner & live stage performance lead artist (2024).',
      highlight: 'State Level',
      icon: Flame,
    },
    {
      id: 'venture',
      category: 'Entrepreneurship',
      title: 'Co-Founder — Social Experiences Venture',
      subtitle: 'Conceptualized and scaled curated community experiences to 400+ attendees across cities.',
      highlight: '400+ Community',
      icon: Compass,
    },
    {
      id: 'leadership',
      category: 'Leadership & Outreach',
      title: 'ACM PR Head & Rotaract President',
      subtitle: 'Directed student chapter operations, workshops, and elevated student outreach by 40%.',
      highlight: '+40% Outreach',
      icon: Users,
    },
  ];

  // Repeat for continuous seamless infinite marquee loop
  const marqueeItems = [
    ...certificates,
    ...certificates,
    ...certificates,
    ...certificates,
    ...certificates,
    ...certificates,
  ];

  return (
    <section className="certificates-section">
      <div className="container-narrow">
        <div className="text-center mb-8">
          <p className="section-eyebrow">Verified Credentials &amp; Certifications</p>
          <h2 className="section-title">Proof of <span className="gradient-text">Competence &amp; Impact</span></h2>
          <p className="certificates-hint">Click any certificate to view or verify credential</p>
        </div>
      </div>

      {/* Floating Pure Certificate Images */}
      <div className="marquee-container mb-12">
        <div className="marquee-content cert-marquee-content">
          {marqueeItems.map((item, index) => (
            <a
              key={`${item.id}-${index}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-pure-card"
              title={`Click to view certificate (${item.alt})`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="cert-pure-image"
                loading="lazy"
              />
              <div className="cert-pure-overlay">
                <span className="cert-pure-btn">
                  View Certificate <ExternalLink size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Key Achievements & Honors Grid */}
      <div className="container-narrow">
        <div className="achievements-header mb-6">
          <h3 className="achievements-subtitle">Honors, Leadership &amp; Milestones</h3>
        </div>
        <div className="achievements-grid">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="achievement-card">
                <div className="achievement-card-top">
                  <div className="achievement-icon-box">
                    <Icon size={20} />
                  </div>
                  <div className="achievement-tags">
                    <span className="achievement-category">{item.category}</span>
                    {item.highlight && <span className="achievement-highlight">{item.highlight}</span>}
                  </div>
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-title">{item.title}</h4>
                  <p className="achievement-desc">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




