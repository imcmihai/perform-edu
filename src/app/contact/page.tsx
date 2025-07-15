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
      <div style={{ position: 'relative', width: '100%', height: '400px', marginTop: '20px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d712.4604740830213!2d26.013340269668557!3d44.415889956114775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20041575f3945%3A0xfb045a6b8c5a127!2sStrada%20Valea%20Oltului%2073%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1752571539247!5m2!1sen!2sro"
          style={{
            border: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
