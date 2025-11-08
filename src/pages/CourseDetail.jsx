import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { courses } from '../data/courses';
import CEOImage from '../assets/Infiniteblossom-CEO.jpeg';
import CollabImage1 from '../assets/Colaborationevent1 (1).jpg';
import CollabImage2 from '../assets/Colaborationevent1 (2).jpg';
import CollabImage3 from '../assets/Colaborationevent1 (3).jpg';
import styles from './Detail.module.css';

function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  // Preload images for better performance
  useEffect(() => {
    [CollabImage1, CollabImage2, CollabImage3].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  if (!course) {
    return (
      <div className={styles.notFound}>
        <h1>Course Not Found</h1>
        <Link to="/services">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className={styles.detailPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div 
          className={styles.heroBackground}
          style={{ backgroundImage: `url(${CollabImage1})` }}
          role="img"
          aria-label={course.title}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <div className={styles.badge}>{course.category}</div>
            <h1 className={styles.heroTitle}>{course.title}</h1>
            <p className={styles.heroPrice}>{course.price}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            {/* Overview */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Course Overview</h2>
              <p className={styles.text}>{course.description}</p>
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <strong>Duration:</strong> {course.duration}
                </div>
                <div className={styles.metaItem}>
                  <strong>Level:</strong> {course.level}
                </div>
              </div>
            </div>

            {/* Teaching Method */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Teaching Method</h2>
              <p className={styles.text}>
                At Infinite Blossom, we believe in interactive and practical learning. Our courses combine:
              </p>
              <ul className={styles.list}>
                <li>Interactive live sessions with experienced instructors</li>
                <li>Practical exercises and real-world applications</li>
                <li>Personalized feedback and progress tracking</li>
                <li>Small class sizes for individual attention</li>
                <li>Flexible scheduling to fit your lifestyle</li>
              </ul>
            </div>

            {/* Meet the CEO */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Meet Our CEO & Lead Instructor</h2>
              <div className={styles.ceoSection}>
                <img src={CEOImage} alt="Infinite Blossom CEO" className={styles.ceoImage} loading="lazy" />
                <div className={styles.ceoInfo}>
                  <h3 className={styles.ceoName}>Evaris Mbuyi</h3>
                  <p className={styles.ceoTitle}>CEO & Founder</p>
                  <p className={styles.text}>
                    With years of experience in education and a passion for empowering students, 
                    our CEO leads a team of dedicated instructors committed to your success. 
                    We believe that quality education should be accessible to everyone, and we work 
                    tirelessly to make that vision a reality.
                  </p>
                </div>
              </div>
            </div>

            {/* Partnerships */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Our School Partnerships</h2>
              <p className={styles.text}>
                Infinite Blossom has partnered with recognized schools to provide quality education 
                and support to students. Our collaboration events showcase our commitment to 
                educational excellence and community engagement.
              </p>
              <div className={styles.gallery}>
                <img src={CollabImage1} alt="Collaboration Event 1" className={styles.galleryImage} loading="lazy" />
                <img src={CollabImage2} alt="Collaboration Event 2" className={styles.galleryImage} loading="lazy" />
                <img src={CollabImage3} alt="Collaboration Event 3" className={styles.galleryImage} loading="lazy" />
              </div>
            </div>

            {/* CTA */}
            <div className={styles.ctaSection}>
              <h2 className={styles.ctaTitle}>Ready to Start Learning?</h2>
              <p className={styles.text}>
                Join hundreds of students who have transformed their skills with Infinite Blossom.
              </p>
              <Link 
                to={`/contact?type=course&item=${course.id}`}
                className={styles.ctaButton}
              >
                Subscribe Now
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Course Details</h3>
              <div className={styles.sidebarItem}>
                <strong>Price:</strong> {course.price}
              </div>
              <div className={styles.sidebarItem}>
                <strong>Duration:</strong> {course.duration}
              </div>
              <div className={styles.sidebarItem}>
                <strong>Level:</strong> {course.level}
              </div>
              <div className={styles.sidebarItem}>
                <strong>Category:</strong> {course.category}
              </div>
              <Link 
                to={`/contact?type=course&item=${course.id}`}
                className={styles.sidebarButton}
              >
                Subscribe Now
              </Link>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Need Help?</h3>
              <p className={styles.sidebarText}>
                Have questions about this course? Contact us and we'll be happy to help!
              </p>
              <Link to="/contact" className={styles.sidebarLink}>
                Contact Us →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
