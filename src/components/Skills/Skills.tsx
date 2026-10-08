import { skills, tools } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHead } from '../ui/SectionHead';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead
          id="skills-title"
          eyebrow="Skills"
          title="Grouped by how I have used them"
          lead="Production means it ran for real users at work. Shipped means I built and deployed it in a project."
        />
        <ul className={styles.tiers}>
          {skills.map((t, i) => (
            <li key={t.id}>
              <Reveal delay={i * 60}>
                <div className={styles.tier} data-tier={t.id}>
                  <h3>{t.title}</h3>
                  <p className={styles.caption}>{t.caption}</p>
                  <ul className={styles.items}>
                    {t.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className={styles.tools}>
          <span>AI tooling I work with daily</span>
          {tools.map((t) => (
            <b key={t} className="chip">
              {t}
            </b>
          ))}
        </p>
      </div>
    </section>
  );
}
