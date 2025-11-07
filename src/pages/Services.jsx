import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import { courses } from '../data/courses';
import { services } from '../data/services';
import styles from './Services.module.css';

function Services() {
  const { ref: coursesRef, isVisible: coursesVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="services-hero-heading">
        <div className={styles.container}>
          <h1 id="services-hero-heading" className={styles.heroTitle}>
            Our <span className={styles.highlight}>Services</span> & Courses
          </h1>
          <p className={styles.heroDescription}>
            Discover our comprehensive range of courses and professional services designed to help you grow and succeed.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className={styles.section} aria-labelledby="courses-heading">
        <div className={styles.container}>
          <h2 
            id="courses-heading"
            ref={coursesRef}
            className={`${styles.sectionHeading} fade-in ${coursesVisible ? 'visible' : ''}`}
          >
            Available Courses
          </h2>
          <p className={styles.sectionDescription}>
            Enhance your skills with our expert-led courses in languages and technology.
          </p>
          <div 
            className={`${styles.grid} stagger-children ${coursesVisible ? 'visible' : ''}`}
          >
            {courses.map((course) => (
              <ServiceCard key={course.id} item={course} type="course" />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.section} aria-labelledby="services-heading">
        <div className={styles.container}>
          <h2 
            id="services-heading"
            ref={servicesRef}
            className={`${styles.sectionHeading} fade-in ${servicesVisible ? 'visible' : ''}`}
          >
            Professional Services
          </h2>
          <p className={styles.sectionDescription}>
            Transform your business with our cutting-edge digital solutions and marketing services.
          </p>
          <div 
            className={`${styles.grid} stagger-children ${servicesVisible ? 'visible' : ''}`}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} item={service} type="service" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={styles.container}>
          <h2 id="cta-heading" className={styles.ctaTitle}>
            Ready to Get Started?
          </h2>
          <p className={styles.ctaDescription}>
            Contact us today to learn more about our courses and services, or to discuss your custom requirements.
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:+1234567890" className={styles.ctaButton}>
              Call Us Now
            </a>
            <a href="mailto:info@infiniteblossom.com" className={styles.ctaButtonSecondary}>
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
