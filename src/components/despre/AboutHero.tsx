import styles from './AboutHero.module.css';
import content from '../../content/despre.json';

export default function AboutHero() {
  const { aboutHero } = content;

  return (
    <section className={styles.aboutHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>
              {aboutHero.title} <span className={styles.highlight}>{aboutHero.highlightedTitle}</span>
              <br />
              {aboutHero.subtitle}
            </h1>
            <div className={styles.missionIntro}>
              <h2 className={styles.missionTitle}>
                {aboutHero.missionTitle}
              </h2>
              <p className={styles.missionText}>
                {aboutHero.missionText}
              </p>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img 
                src={aboutHero.image}
                alt={aboutHero.imageAlt}
                className={styles.image}
              />
            </div>
            
            {/* Floating stats */}
            <div className={styles.statsFloat}>
              {aboutHero.stats.map((stat, index) => (
                <div className={styles.stat} key={index}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story continuation */}
        <div className={styles.storySection}>
          <p className={styles.storyText}>
            {aboutHero.storyText}
            <span className={styles.emphasis}> {aboutHero.emphasizedText}</span>
          </p>
        </div>

        {/* Decorative elements */}
        <div className={styles.decorativeElements}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </div>
      </div>
    </section>
  );
} 