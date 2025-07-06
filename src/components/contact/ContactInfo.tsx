import styles from './ContactInfo.module.css';
import content from '../../content/contact.json';

export default function ContactInfo() {
  const { contactInfo } = content;

  return (
    <div className={styles.contactInfo}>
      <h2 className={styles.title}>{contactInfo.title}</h2>
      <div className={styles.infoItem}>
        <h3>Adresa:</h3>
        <p>{contactInfo.address}</p>
      </div>
      <div className={styles.infoItem}>
        <h3>Telefon:</h3>
        <p>{contactInfo.phone}</p>
      </div>
      <div className={styles.infoItem}>
        <h3>Email:</h3>
        <p>{contactInfo.email}</p>
      </div>
    </div>
  );
} 