import { useFadeIn } from '../hooks/useFadeIn'
import styles from './About.module.css'

const links = [
  { label: 'GitHub', href: 'https://github.com/nerdynikhil' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nerdynikhil/' },
  { label: 'Twitter', href: 'https://twitter.com/nerdynikhil' },
  { label: 'Instagram', href: 'https://www.instagram.com/i.know.nothing_/' },
]

export default function About() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.cell} ${styles.cellLeft} ${visible ? styles.enter1 : styles.hidden}`}>
            <p className={styles.label}>About</p>
            <p className={styles.body}>
              I'm Nikhil Barik — a developer and product builder who ships
              across platforms. I care about clean design, useful tools, and
              making things people actually want to use.
            </p>
          </div>
          <div className={`${styles.cell} ${styles.cellRight} ${visible ? styles.enter2 : styles.hidden}`}>
            <p className={styles.label}>Connect</p>
            <div className={styles.linkList}>
              {links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} -&gt;
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
