import { achievements, certificates } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHead } from '../ui/SectionHead';
import styles from './Credentials.module.css';

export function Credentials() {
  return (
    <section className="section" id="credentials" aria-labelledby="cred-title">
      <div className="container">
        <SectionHead id="cred-title" eyebrow="Credentials" title="Assessments, certificates and leadership" />

        <ul className={styles.assess}>
          {achievements.assessments.map((a) => (
            <li key={a.title}>
              <Reveal>
                <div className={styles.stat}>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <ul className={styles.certs}>
          {certificates.map((c) => {
            const img = <img src={c.image} alt={c.alt} width={c.width} height={c.height} loading="lazy" />;
            return (
              <li key={c.id}>
                <Reveal>
                  {c.href ? (
                    <a className={styles.cert} href={c.href} target="_blank" rel="noopener noreferrer">
                      {img}
                      <span className="sr-only">Verify credential (opens in a new tab)</span>
                    </a>
                  ) : (
                    <div className={styles.cert}>{img}</div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>

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
