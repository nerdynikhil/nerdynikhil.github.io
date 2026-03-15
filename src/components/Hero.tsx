import { useFadeIn } from '../hooks/useFadeIn'
import { BlurFade } from './ui/blur-fade'
import { TextEffect } from './ui/text-effect'
import styles from './Hero.module.css'

export default function Hero() {
  const { ref, visible } = useFadeIn(0.05)

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      {/* Ambient blur orbs */}
      <div className={styles.orbA} />
      <div className={styles.orbB} />

      <div className={styles.container}>
        {visible && (
          <>
            <BlurFade delay={0} inView>
              <img src="/dp.png" alt="Nikhil Barik" className={styles.avatar} />
            </BlurFade>

            <BlurFade delay={0.15} inView>
              <p className={styles.greeting}>
                Hey, I'm Nikhil
              </p>
            </BlurFade>

            <TextEffect
              per="word"
              as="h1"
              delay={0.3}
              className={styles.title}
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                },
                item: {
                  hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
                  visible: {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                },
              }}
            >
              I build products that solve real problems
            </TextEffect>

            <TextEffect
              per="word"
              preset="slide"
              delay={0.8}
              className={styles.sub}
            >
              From iOS apps to Chrome extensions to SaaS tools.
            </TextEffect>
          </>
        )}
      </div>
    </section>
  )
}
