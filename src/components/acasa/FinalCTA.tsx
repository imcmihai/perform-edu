import styles from './FinalCTA.module.css';
import content from '../../content/acasa.json';

export default function FinalCTA() {
  const { finalCta } = content;

  return (
    <section className={styles.finalCTA}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              {finalCta.title}
              <span className={styles.highlight}> {finalCta.highlightedTitle}</span>
            </h2>
            <p className={styles.description}>
              {finalCta.description}
            </p>
            
            <div className={styles.ctaButtons}>
              <a href={`tel:${finalCta.phone.replace(/\s/g, '')}`} className={`elitemind-button ${styles.phoneButton}`}>
                📞 Sună acum: {finalCta.phone}
              </a>
              <button className={`elitemind-button secondary ${styles.contactButton}`}>
                {finalCta.primaryCta}
              </button>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img 
                src={finalCta.image}
                alt={finalCta.imageAlt}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={styles.decorativeElements}>
          <div className={styles.circle}></div>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
} 