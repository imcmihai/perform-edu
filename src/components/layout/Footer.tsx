import Link from 'next/link';
import styles from './Footer.module.css';
import content from '../../content/footer.json';

export default function Footer() {
  const { links, socials, contactInfo, copyright } = content;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoSection}>
            <h3 className={styles.brand}>Elite Mind Academy</h3>
            <p className={styles.tagline}>Excelenta in educatie.</p>
          </div>
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Linkuri Utile</h4>
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={styles.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  contactInfo.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {contactInfo.address}
              </a>
            </p>
            <p>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className={styles.link}>
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.email}`} className={styles.link}>
                {contactInfo.email}
              </a>
            </p>
          </div>
          <div className={styles.socialsSection}>
            <h4 className={styles.sectionTitle}>Urmareste-ne</h4>
            <div className={styles.socialIcons}>
              {socials.map((social) => (
                <a key={social.name} href={social.href} className={styles.socialLink}>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
} 