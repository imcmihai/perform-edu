import styles from './FinalCTA.module.css';
import content from '../../content/acasa.json';
import Image from 'next/image';
import Link from 'next/link';

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
              <Link href="/contact" className={`elitemind-button secondary ${styles.contactButton}`}>
                {finalCta.primaryCta}
              </Link>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image 
                src={finalCta.image}
                alt={finalCta.imageAlt}
                className={styles.image}
                width={1000}
                height={1000}
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