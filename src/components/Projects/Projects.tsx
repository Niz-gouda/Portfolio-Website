import { projects, smallerWork } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHead } from '../ui/SectionHead';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          id="projects-title"
          eyebrow="Projects"
          title="Systems I built, with their limits stated"
          lead="Each entry says what it does, what was measured, and what it does not do yet."
        />
        <ul className={styles.list}>
          {projects.map((p) => (
            <li key={p.id}>
              <Reveal>
                <article className={styles.card} aria-labelledby={`proj-${p.id}`}>
                  <header>
                    <p className={styles.kicker}>{p.kicker}</p>
                    <h3 id={`proj-${p.id}`} className={styles.name}>
                      {p.name}
                    </h3>
                    <p className={styles.pitch}>{p.pitch}</p>
                  </header>
                  <ul className={styles.bullets}>
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <p className={styles.limits}>
                    <span>Limits</span> {p.limits}
                  </p>
                  {p.process ? <p className={styles.process}>{p.process}</p> : null}
                  <ul className={styles.chips} aria-label="Stack">
                    {p.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.links}>
                    {p.links.map((l, i) => (
                      <a
                        key={l.href}
                        className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}`}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.label}
                        <span className="sr-only"> for {p.name} (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className={styles.smaller}>
            <h3>Smaller work</h3>
            <ul>
              {smallerWork.map((s) => (
                <li key={s.name}>
                  <strong>{s.name}</strong>
                  <span>{s.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
