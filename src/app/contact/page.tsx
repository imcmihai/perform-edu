import ContactHero from '../../components/contact/ContactHero';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';
import styles from './contact-page.module.css';

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
