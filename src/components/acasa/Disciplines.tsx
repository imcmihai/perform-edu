import styles from './Disciplines.module.css';
import content from '../../content/acasa.json';
import Link from 'next/link';

export default function Disciplines() {
  const { disciplines: disciplinesContent } = content;
  const { disciplines } = disciplinesContent;

  return (
    <section className={styles.disciplines}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {disciplinesContent.title} <span className={styles.highlight}>{disciplinesContent.highlightedSubtitle}</span>
            <br />
            {disciplinesContent.subtitle}
          </h2>
          <p className={styles.subtitle}>
            {disciplinesContent.description}
          </p>
        </div>

        <div className={styles.disciplinesGrid}>
          {disciplines.map((discipline, index) => (
            <div 
              key={index} 
              className={`${styles.disciplineCard}  ${styles[discipline.color]}`}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={discipline.image} 
                  alt={discipline.subject}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.subject}>{discipline.subject}</h3>
                <p className={styles.description}>{discipline.description}</p>
                
                <div className={styles.highlights}>
                  {discipline.highlights.map((highlight, i) => (
                    <span key={i} className={styles.tag}>{highlight}</span>
                  ))}
                </div>

                <Link href="/cursuri" className={`elitemind-button ${styles.ctaButton}`}>
                  Vezi Detalii
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <button className={`elitemind-button ${styles.mainCta}`}>
            {disciplinesContent.mainCta}
          </button>
        </div>
      </div>
    </section>
  );
} 