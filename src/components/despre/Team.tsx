import styles from './Team.module.css';
import content from '../../content/despre.json';

export default function Team() {
  const { team } = content;

  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              {team.title} <span className={styles.highlight}>{team.highlightedTitle}</span>
              <br />
              {team.subtitle}
            </h2>
            
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                {team.description}
              </p>
            </div>

            <div className={styles.criteriaHeader}>
              <h3 className={styles.criteriaTitle}>{team.criteriaTitle}</h3>
            </div>

            <div className={styles.criteriaList}>
              {team.criteria.map((criterion, index) => (
                <div key={index} className={styles.criterionItem}>
                  <div className={styles.criterionIcon}>
                    <span>{criterion.icon}</span>
                  </div>
                  <div className={styles.criterionContent}>
                    <h4 className={styles.criterionTitle}>{criterion.title}</h4>
                    <p className={styles.criterionDescription}>{criterion.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img 
                src={team.image}
                alt={team.imageAlt}
                className={styles.image}
              />
            </div>
            
            <div className={styles.statsCards}>
              {team.stats.map((stat, index) => (
                <div className={styles.statCard} key={index}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statContent}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 