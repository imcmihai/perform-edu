'use client';
import styles from './CourseList.module.css';
import content from '../../content/cursuri.json';
import Image from 'next/image';

export default function CourseList() {
  const { courses } = content;

  return (
    <section className={styles.courseList}>
      <div className={styles.container}>
        {courses.map((course) => (
          <div key={course.id} id={course.id} className={styles.courseCard}>

              <Image
                src={course.image}
                alt={course.title}
                width={1920}
                height={1080}
                className={styles.image}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16/9',
                  objectFit: 'cover'
                }}
                quality={85}
                priority={course.id === 'matematica'}
              />

            <div className={styles.contentSection}>
              <h2 className={styles.title}>{course.title}</h2>
              <span className={styles.subtitle}>{course.subtitle}</span>
              <p className={styles.description}>
                {course.description || ''}
              </p>
              
              {course.id === 'limbi-straine' && course.languages && (
                <div className={styles.languageTabs}>
                  {course.languages.map(lang => (
                    <div key={lang.name}>
                      <h4>{lang.name}</h4>
                      <p className={styles.languageDescription}>{lang.description}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.detailsGrid}>
                {course.details && Object.values(course.details).map((detail: { title: string; items: string[] }) => (
                  <div key={detail.title} className={styles.detailColumn}>
                    <h4>{detail.title}</h4>
                    <ul className={styles.detailList}>
                      {detail.items.map((item: string, index: number) => (
                        <li key={index} className={styles.detailItem}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 