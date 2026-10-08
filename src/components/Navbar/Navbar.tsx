import { useTheme } from '../../hooks/useTheme';
import { person } from '../../data/content';
import { Logo } from '../ui/Logo';
import styles from './Navbar.module.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

const THEME_LABEL = { system: 'Theme: system', light: 'Theme: light', dark: 'Theme: dark' } as const;

export function Navbar() {
  const { preference, cycle } = useTheme();
  return (
    <header className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#top" aria-label={`${person.name}, back to top`}>
          <Logo />
          <span>{person.shortName}</span>
        </a>
        <nav aria-label="Primary" className={styles.nav}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <button type="button" className={styles.theme} onClick={cycle} aria-label={`${THEME_LABEL[preference]}. Click to change.`}>
          {preference === 'system' ? 'Auto' : preference === 'light' ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
}
