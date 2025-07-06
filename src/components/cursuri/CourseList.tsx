'use client';
import styles from './CourseList.module.css';
import content from '../../content/cursuri.json';

export default function CourseList() {
  const { courses } = content;

  return (
    <section className={styles.courseList}>
      <div className={styles.container}>
        {courses.map((course) => (
          <div key={course.id} id={course.id} className={styles.courseCard}>
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
                {course.details && Object.values(course.details).map((detail: any) => (
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
            <div className={styles.imageSection}>
              <img src={course.image} alt={course.title} className={styles.image} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 