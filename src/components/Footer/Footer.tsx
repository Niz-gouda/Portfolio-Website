import { contact, person } from '../../data/content';
import { BrandLink } from '../ui/BrandLink';
import styles from './Footer.module.css';

const LINKS = [
  { brand: 'linkedin', href: person.links.linkedin },
  { brand: 'github', href: person.links.github },
  { brand: 'leetcode', href: person.links.leetcode },
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
            <li key={l.brand}>
              <BrandLink brand={l.brand} href={l.href} />
            </li>
          ))}
        </ul>
      </div>
      <p className={`container ${styles.fine}`}>© {new Date().getFullYear()} {person.name}. {person.location}.</p>
    </footer>
  );
}
