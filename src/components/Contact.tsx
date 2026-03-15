import { useFadeIn } from '../hooks/useFadeIn'
import styles from './Contact.module.css'

export default function Contact() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <div className={styles.block}>
          <p className={`${styles.label} ${visible ? styles.enter1 : styles.hidden}`}>Contact</p>
          <h2 className={`${styles.title} ${visible ? styles.enter2 : styles.hidden}`}>Let's talk</h2>
          <p className={`${styles.body} ${visible ? styles.enter3 : styles.hidden}`}>
            Have a project in mind, want to collaborate, or just say hello?
          </p>
          <a
            href="mailto:nerdynikhil@hotmail.com"
            className={`${styles.btn} ${visible ? styles.enter4 : styles.hidden}`}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
