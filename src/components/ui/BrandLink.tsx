import { siGithub, siLeetcode, siLinkedin } from 'simple-icons';
import styles from './BrandLink.module.css';

const BRANDS = {
  linkedin: siLinkedin,
  github: siGithub,
  leetcode: siLeetcode,
} as const;

export type Brand = keyof typeof BRANDS;

/** Icon-only link using the brand's own mark. The accessible name carries the text the icon replaces. */
export function BrandLink({ brand, href, variant = 'solid' }: { brand: Brand; href: string; variant?: 'solid' | 'outline' }) {
  const icon = BRANDS[brand];
  return (
    <a
      className={`${styles.link} ${variant === 'outline' ? styles.outline : styles.solid}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${icon.title} (opens in a new tab)`}
      title={icon.title}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false" fill="currentColor">
        <path d={icon.path} />
      </svg>
    </a>
  );
}
