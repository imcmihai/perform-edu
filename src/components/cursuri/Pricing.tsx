import styles from './Pricing.module.css';
import content from '../../content/cursuri.json';
import Link from 'next/link';

export default function Pricing() {
  const { pricing } = content;

  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{pricing.title}</h2>
        <p className={styles.subtitle}>{pricing.subtitle}</p>
        <div className={styles.pricingGrid}>
          {pricing.plans.map((plan, index) => (
            <div 
              className={`${styles.priceCard} ${plan.recommended ? styles.recommended : ''}`} 
              key={index}
            >
              <h3>{plan.name}</h3>
              <div className={styles.price}>
                {index === 0 ? (
                  <Link href="/contact" className={styles.priceAmount} style={{ textDecoration: 'none' }}>
                    {plan.price}
                  </Link>
                ) : (
                  <>
                    <span className={styles.pricePer}>de la</span>
                    <span className={styles.priceAmount}>{plan.price}</span>
                  </>
                )}
                <span className={styles.pricePer}>{plan.per}</span>
              </div>
              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>{` ✓ ${feature}`}</li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
        <div className={styles.paymentInfo}>
        Plata se face prin transfer bancar.
          <br />
          <strong>IBAN: RO89BTRLRONCRT0CX7256701</strong>

        </div>
      </div>
    </section>
  );
} 