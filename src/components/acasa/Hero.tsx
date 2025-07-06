import styles from './Hero.module.css';
import content from '../../content/acasa.json';

export default function Hero() {
  const { hero } = content;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {/* Main content block - larger */}
          <div className={styles.mainContent}>
            <h1 className={styles.title}>
              {hero.title}
              <span className={styles.highlight}> {hero.highlightedTitle}</span>
            </h1>
            <p className={styles.subtitle}>
              {hero.subtitle}
            </p>
            <div className={styles.ctaButtons}>
              <button className={`elitemind-button ${styles.primaryBtn}`}>
                {hero.primaryCta}
              </button>
              <button className={`elitemind-button secondary ${styles.secondaryBtn}`}>
                {hero.secondaryCta}
              </button>
            </div>
          </div>

          {/* Hero image - asymmetrical placement */}
          <div className={styles.heroImage}>
            <div className={styles.imageContainer}>
              <img 
                src={hero.image}
                alt={hero.imageAlt}
                className={styles.image}
              />
            </div>
          </div>

          {/* Floating stats card */}
          <div className={styles.statsCard}>
            {hero.stats.map((stat, index) => (
              <div className={styles.stat} key={index}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Floating element for visual interest */}
          <div className={styles.floatingElement}>
            <div className={styles.decorativeCircle}></div>
          </div>
        </div>
      </div>
    </section>
  );
} 