import styles from './Results.module.css';
import content from '../../content/despre.json';
import Link from 'next/link';

export default function Results() {
  const { results } = content;
  const { achievements, cta } = results;

  return (
    <section className={styles.results}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {results.title} <span className={styles.highlight}>{results.highlightedTitle}</span>
            <br />
            <span className={styles.subtitle}>{results.subtitle}</span>
          </h2>
          <p className={styles.intro}>
            {results.intro}
          </p>
        </div>

        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`${styles.achievementCard} ${styles[achievement.color]}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>{achievement.icon}</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.number}>
                    {achievement.metric}
                  </span>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                <p className={styles.achievementDescription}>
                  {achievement.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className={styles.gradientBar}></div>
              <div className={styles.floatingDot}></div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>
              {cta.title}
            </h3>
            <p className={styles.ctaDescription}>
              {cta.description}
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                {cta.primaryButton}
              </Link>
              <Link href="/cursuri" className={styles.secondaryButton}>
                {cta.secondaryButton}
              </Link>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.floatingShape1}></div>
          <div className={styles.floatingShape2}></div>
          <div className={styles.floatingShape3}></div>
        </div>
      </div>
    </section>
  );
} 