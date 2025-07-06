import styles from './CursuriHero.module.css';
import content from '../../content/cursuri.json';

export default function CursuriHero() {
  const { hero } = content;

  return (
    <section className={styles.cursuriHero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {hero.title}
          <span className={styles.highlight}>{hero.subtitle}</span>
        </h1>
        <p className={styles.intro}>
          {hero.intro}
        </p>
      </div>
    </section>
  );
} 