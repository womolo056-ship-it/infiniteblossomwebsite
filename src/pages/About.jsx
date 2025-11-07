import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './About.module.css';

function About() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.2 });

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from course content to customer service.',
      icon: '🎯'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and teaching methods to provide the best learning experience.',
      icon: '💡'
    },
    {
      title: 'Accessibility',
      description: 'Quality education and services should be accessible to everyone, regardless of background.',
      icon: '🌍'
    },
    {
      title: 'Growth',
      description: 'We believe in continuous growth and improvement for both our students and our team.',
      icon: '📈'
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 
            ref={heroRef}
            className={`${styles.heroTitle} fade-in ${heroVisible ? 'visible' : ''}`}
          >
            About <span className={styles.highlight}>Infinite Blossom</span>
          </h1>
          <p className={styles.heroDescription}>
            Empowering individuals and businesses through education and innovative digital solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div 
            ref={missionRef}
            className={`${styles.missionContent} fade-in ${missionVisible ? 'visible' : ''}`}
          >
            <div className={styles.missionText}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.paragraph}>
                At Infinite Blossom, we are dedicated to transforming lives through quality education and cutting-edge digital services. We believe that everyone deserves access to world-class learning opportunities and innovative business solutions.
              </p>
              <p className={styles.paragraph}>
                Our team of experienced educators and digital experts work tirelessly to create courses and services that not only meet but exceed expectations. We combine traditional teaching excellence with modern technology to deliver results that matter.
              </p>
            </div>
            <div className={styles.missionImage}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                alt="Team collaboration" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 
            ref={valuesRef}
            className={`${styles.sectionTitle} ${styles.centered} fade-in ${valuesVisible ? 'visible' : ''}`}
          >
            Our Core Values
          </h2>
          <div className={`${styles.valuesGrid} stagger-children ${valuesVisible ? 'visible' : ''}`}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.paragraph}>
              Infinite Blossom was founded with a simple yet powerful vision: to create a platform where learning meets innovation. What started as a small language school has grown into a comprehensive education and digital services provider.
            </p>
            <p className={styles.paragraph}>
              Today, we serve thousands of students and businesses, helping them achieve their goals through our diverse range of courses and professional services. From language education to AI automation, we continue to expand our offerings to meet the evolving needs of our community.
            </p>
            <p className={styles.paragraph}>
              Our success is measured not just in numbers, but in the transformed lives of our students and the thriving businesses we've helped grow. Every day, we work towards making quality education and innovative solutions accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
          <p className={styles.ctaDescription}>
            Join thousands of satisfied students and businesses who have transformed their future with Infinite Blossom.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/services" className={styles.ctaButton}>
              Explore Our Services
            </a>
            <a href="/contact" className={styles.ctaButtonSecondary}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
