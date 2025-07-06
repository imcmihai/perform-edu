import styles from './Values.module.css';
import content from '../../content/despre.json';

export default function Values() {
  const { values: valuesContent } = content;
  const { values } = valuesContent;

  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {valuesContent.title} <span className={styles.highlight}>{valuesContent.highlightedTitle}</span>
            <br />
            {valuesContent.subtitle}
          </h2>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`${styles.valueCard} ${styles[value.size]} ${styles[value.color]}`}
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{value.icon}</span>
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
              
              {/* Decorative corner element */}
              <div className={styles.cornerDecoration}></div>
            </div>
          ))}
        </div>

        {/* Background decorative elements */}
        <div className={styles.backgroundPattern}>
          <div className={styles.patternDot}></div>
          <div className={styles.patternDot}></div>
          <div className={styles.patternDot}></div>
          <div className={styles.patternDot}></div>
          <div className={styles.patternDot}></div>
        </div>
      </div>
    </section>
  );
} 