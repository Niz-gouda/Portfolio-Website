import { principles } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHead } from '../ui/SectionHead';
import { Motif } from './Motif';
import styles from './Principles.module.css';

export function Principles() {
  return (
    <section className="section" id="principles" aria-labelledby="principles-title">
      <div className="container">
        <SectionHead
          id="principles-title"
          eyebrow="Working notes"
          title="Instincts that show up in the code"
          lead="Habits I carry from outside the editor, each tied to something I built or measured."
        />
        <ul className={styles.grid}>
          {principles.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={(i % 3) * 50}>
                <article className={styles.card}>
                  <Motif id={p.id} />
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <p className={styles.ref}>ref: {p.ref}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
