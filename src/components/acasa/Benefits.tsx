import styles from './Benefits.module.css';
import content from '../../content/acasa.json';

export default function Benefits() {
  const { benefits: benefitsContent } = content;
  const { benefits } = benefitsContent;

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {benefitsContent.title} <span className={styles.highlight}>{benefitsContent.subtitle}</span>
            <br />
            {benefitsContent.description}
          </h2>
        </div>
        
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`${styles.benefitCard} `}
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{benefit.icon}</span>
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className={styles.decorativeElements}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  );
} 