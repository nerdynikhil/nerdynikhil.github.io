import { useTheme } from '../hooks/useTheme'
import styles from './Nav.module.css'

export default function Nav() {
  const { theme, toggle } = useTheme()

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.pill}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <button
            onClick={toggle}
            className={styles.toggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v1M8 14v1M3.05 3.05l.707.707M12.243 12.243l.707.707M1 8h1M14 8h1M3.05 12.95l.707-.707M12.243 3.757l.707-.707" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14.3 10.1A6.5 6.5 0 0 1 5.9 1.7 6.5 6.5 0 1 0 14.3 10.1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
