import styles from './ContactHero.module.css';
import content from '../../content/contact.json';

export default function ContactHero() {
  const { contactHero } = content;

  return (
    <section className={styles.contactHero}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>
            {contactHero.title} <span className={styles.highlight}>{contactHero.highlightedTitle}</span>
          </h1>
          <p className={styles.subtitle}>
            {contactHero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
} 