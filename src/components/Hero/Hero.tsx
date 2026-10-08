import { person, proof } from '../../data/content';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="eyebrow">{person.name} · {person.location}</p>
          <h1 id="hero-title" className={styles.title}>
            {person.headline}
          </h1>
          <p className={`lead ${styles.lead}`}>{person.lead}</p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href="#projects">
              See the work
            </a>
            <a className="btn btn-secondary" href={person.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-secondary" href={person.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <aside className={styles.panel} aria-label="Evidence">
          <p className={styles.panelTitle}>Evidence, not adjectives</p>
          <ul className={styles.rows}>
            {proof.map((p) => {
              const external = p.href.startsWith('http');
              return (
                <li key={p.label}>
                  <a href={p.href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    <span className={styles.label}>{p.label}</span>
                    <span className={styles.value}>{p.value}</span>
                    <span className={styles.detail}>{p.detail}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </section>
  );
}
