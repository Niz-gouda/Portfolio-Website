import { about } from '../../data/content';
import photo from '../../assets/Nischal Portfolio.jpeg';
import { Reveal } from '../ui/Reveal';
import { SectionHead } from '../ui/SectionHead';
import styles from './About.module.css';

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHead id="about-title" eyebrow="About" title={about.lead} />
        <div className={styles.top}>
          <Reveal>
            <div className={styles.copy}>
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <dl className={styles.facts}>
                {about.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <img className={styles.photo} src={photo} alt="Nischalgouda Patil" width={1600} height={900} loading="lazy" />
          </Reveal>
        </div>

        <Reveal>
          <ol className={styles.path} aria-label="Career path">
            {about.path.map((s) => (
              <li key={s.stage} className={'current' in s && s.current ? styles.current : undefined}>
                <span className={styles.stage}>{s.stage}</span>
                <strong>{s.title}</strong>
                <span>{s.line1}</span>
                <span>{s.line2}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <ul className={styles.strengths}>
          {about.strengths.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 40}>
                <div className={styles.card}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
