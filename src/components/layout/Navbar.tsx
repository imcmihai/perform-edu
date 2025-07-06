'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Acasa", href: "/" },
    { name: "Cursuri", href: "/cursuri" },
    { name: "Despre Noi", href: "/despre" },
    { name: "Contact", href: "/contact" }
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">EliteMind</Link>
          </div>
          <div className={styles.links}>
            {links.map(link => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className={styles.actionButton}>
            <button>Inscrie-te</button>
          </div>
          <div className={styles.burgerMenu} onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
            <div className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
            <div className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
          </div>
        </div>
      </nav>
      <div className={`${styles.sidePanel} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.sidePanelLinks}>
          {links.map(link => (
            <Link key={link.href} href={link.href} className={styles.sidePanelLink} onClick={handleLinkClick}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
} 