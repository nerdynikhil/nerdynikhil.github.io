import { useFadeIn } from '../hooks/useFadeIn'
import { categories } from '../data/projects'
import { PlatformIcon } from './PlatformIcon'
import styles from './Work.module.css'

function ProjectCard({ name, description, href, domain }: {
  name: string
  description: string
  href: string
  domain?: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <span className={styles.cardName}>{name}</span>
      {domain && <span className={styles.cardDomain}>{domain}</span>}
      <span className={styles.cardDesc}>{description}</span>
      <span className={styles.arrow}>-&gt;</span>
    </a>
  )
}

export default function Work() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="work" className={styles.work} ref={ref}>
      <div className={styles.container}>
        <p className={`${styles.label} ${visible ? styles.enter1 : styles.hidden}`}>Selected Work</p>
        <h2 className={`${styles.title} ${visible ? styles.enter2 : styles.hidden}`}>Projects</h2>

        {categories.map((cat, i) => (
          <div key={cat.label} className={visible ? styles.enter3 : styles.hidden} style={{ animationDelay: `${0.1 + i * 0.06}s` }}>
            <p className={styles.catLabel}>
              {cat.icon !== 'saas' && (
                <span className={styles.catIcon}>
                  <PlatformIcon type={cat.icon} size={13} />
                </span>
              )}
              {cat.label}
            </p>
            <div className={styles.grid}>
              {cat.items.map((p) => (
                <ProjectCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
