import { achievements, certificates } from '../../data/content';
import { SectionHead } from '../ui/SectionHead';
import styles from './Credentials.module.css';

function CertCard({ c, hidden }: { c: (typeof certificates)[number]; hidden?: boolean }) {
  const img = <img src={c.image} alt={hidden ? '' : c.alt} width={c.width} height={c.height} loading="lazy" />;
  if (c.href) {
    return (
      <a className={styles.cert} href={c.href} target="_blank" rel="noopener noreferrer" tabIndex={hidden ? -1 : undefined}>
        {img}
        {hidden ? null : <span className="sr-only">Verify credential (opens in a new tab)</span>}
      </a>
    );
  }
  return <div className={styles.cert}>{img}</div>;
}

export function Credentials() {
  return (
    <section className="section" id="credentials" aria-labelledby="cred-title">
      <div className="container">
        <SectionHead id="cred-title" eyebrow="Credentials" title="Certificates and leadership" />
      </div>

      <div className={styles.marquee} role="region" aria-label="Certificates">
        <ul className={styles.track}>
          {certificates.map((c) => (
            <li key={c.id}>
              <CertCard c={c} />
            </li>
          ))}
          {/* Second copy makes the loop seamless. Hidden from assistive tech and the tab order. */}
          {certificates.map((c) => (
            <li key={`${c.id}-copy`} aria-hidden="true">
              <CertCard c={c} hidden />
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <h3 className={styles.sub}>Leadership and community</h3>
        <ul className={styles.lead}>
          {achievements.leadership.map((l) => (
            <li key={l.title}>
              <strong>{l.title}</strong>
              <span>{l.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
