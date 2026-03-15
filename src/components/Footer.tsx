import styles from './Footer.module.css'

const links = [
  { label: 'GitHub', href: 'https://github.com/nerdynikhil' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nerdynikhil/' },
  { label: 'Twitter', href: 'https://twitter.com/nerdynikhil' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <span className={styles.copy}>&copy; 2026 Nikhil Barik</span>
          <div className={styles.links}>
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
