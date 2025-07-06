'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';
import content from '../../content/contact.json';

export default function ContactForm() {
  const { contactForm } = content;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
    alert('Mesajul a fost trimis!');
  };

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{contactForm.title}</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder={contactForm.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder={contactForm.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea
              placeholder={contactForm.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            {contactForm.submitButton}
          </button>
        </form>
      </div>
    </section>
  );
} 