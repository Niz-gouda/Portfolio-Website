import { contact, person } from '../../data/content';
import styles from './Footer.module.css';

const LINKS = [
  { label: 'LinkedIn', href: person.links.linkedin },
  { label: 'GitHub', href: person.links.github },
  { label: 'LeetCode', href: person.links.leetcode },
] as const;

export function Footer() {
  return (
    <footer className={styles.footer} id="contact" aria-labelledby="contact-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="h2" id="contact-title">
            {contact.heading}
          </h2>
          <p className="lead">{contact.body}</p>
        </div>
        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.label}>
              <a className="btn btn-primary" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className={`container ${styles.fine}`}>© {new Date().getFullYear()} {person.name}. {person.location}.</p>
    </footer>
  );
}
