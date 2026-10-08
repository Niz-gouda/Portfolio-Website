import { experience } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHead } from '../ui/SectionHead';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHead id="experience-title" eyebrow="Experience" title={experience.company} lead={experience.summary} />
        <ol className={styles.roles} aria-label="Roles">
          {experience.roles.map((r) => (
            <li key={r.title}>
              <strong>{r.title}</strong>
              <span>{r.period}</span>
              {'note' in r && r.note ? <em>{r.note}</em> : null}
            </li>
          ))}
        </ol>

        <ul className={styles.work}>
          {experience.work.map((w) => (
            <li key={w.id}>
              <Reveal>
                <article className={styles.card} aria-labelledby={`work-${w.id}`}>
                  <p className={styles.kicker}>{w.kicker}</p>
                  <h3 id={`work-${w.id}`}>{w.title}</h3>
                  <p className={styles.body}>{w.body}</p>
                  <ul className={styles.bullets}>
                    {w.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <ul className={styles.chips} aria-label="Stack">
                    {w.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <ul className={styles.notes}>
          {experience.notes.map((n) => (
            <li key={n.title}>
              <Reveal>
                <div className={styles.note}>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
