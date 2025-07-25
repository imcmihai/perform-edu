import styles from './ContactInfo.module.css';
import content from '../../content/contact.json';
import Image from 'next/image';

export default function ContactInfo() {
  const { contactInfo } = content;

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.contactInfo}>
          <h2 className={styles.title}>{contactInfo.title}</h2>
          <div className={styles.infoItem}>
            <h3>Adresa:</h3>
            <p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  contactInfo.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactInfo.address}
              </a>
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3>Telefon:</h3>
            <p>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                {contactInfo.phone}
              </a>
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3>Email:</h3>
            <p>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <Image
            src={contactInfo.image}
            alt="Locația Elite Mind Academy"
            fill
            className={styles.locationImage}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
} 