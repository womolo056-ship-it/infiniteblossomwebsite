import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { services } from '../data/services';
import CEOImage from '../assets/Infiniteblossom-CEO.jpeg';
import styles from './Detail.module.css';

function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  // Preload hero image for better performance
  useEffect(() => {
    if (service?.image) {
      const img = new Image();
      img.src = service.image;
    }
  }, [service]);

  if (!service) {
    return (
      <div className={styles.notFound}>
        <h1>Service Not Found</h1>
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
          style={{ backgroundImage: `url(${service.image})` }}
          role="img"
          aria-label={service.title}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <div className={styles.badge}>{service.category}</div>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className={styles.heroPrice}>{service.price}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            {/* Overview */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Service Overview</h2>
              <p className={styles.text}>{service.description}</p>
            </div>

            {/* Features */}
            {service.features && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>What's Included</h2>
                <ul className={styles.featureList}>
                  {service.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Our Approach */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Approach</h2>
              <p className={styles.text}>
                At Infinite Blossom, we combine cutting-edge technology with personalized service 
                to deliver exceptional results. Our team of experts works closely with you to 
                understand your unique needs and create tailored solutions that drive real business value.
              </p>
              <ul className={styles.list}>
                <li>Initial consultation to understand your goals</li>
                <li>Custom strategy development</li>
                <li>Professional implementation and execution</li>
                <li>Ongoing support and optimization</li>
                <li>Regular progress reports and analytics</li>
              </ul>
            </div>

            {/* Meet the Team */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Meet Our CEO</h2>
              <div className={styles.ceoSection}>
                <img src={CEOImage} alt="Infinite Blossom CEO" className={styles.ceoImage} loading="lazy" />
                <div className={styles.ceoInfo}>
                  <h3 className={styles.ceoName}>Evaris Mbuyi</h3>
                  <p className={styles.ceoTitle}>CEO & Founder</p>
                  <p className={styles.text}>
                    Leading a team of digital experts, our CEO brings years of experience in 
                    technology and business innovation. We're committed to helping businesses 
                    thrive in the digital age through innovative solutions and exceptional service.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Infinite Blossom?</h2>
              <div className={styles.whyGrid}>
                <div className={styles.whyCard}>
                  <h3>Expertise</h3>
                  <p>Years of experience delivering successful projects</p>
                </div>
                <div className={styles.whyCard}>
                  <h3>Quality</h3>
                  <p>Commitment to excellence in every detail</p>
                </div>
                <div className={styles.whyCard}>
                  <h3>Support</h3>
                  <p>Dedicated team available to help you succeed</p>
                </div>
                <div className={styles.whyCard}>
                  <h3>Results</h3>
                  <p>Proven track record of delivering measurable outcomes</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={styles.ctaSection}>
              <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
              <p className={styles.text}>
                Let's discuss how we can help transform your business with our professional services.
              </p>
              <Link 
                to={`/contact?type=service&item=${service.id}`}
                className={styles.ctaButton}
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Service Details</h3>
              <div className={styles.sidebarItem}>
                <strong>Price:</strong> {service.price}
              </div>
              <div className={styles.sidebarItem}>
                <strong>Category:</strong> {service.category}
              </div>
              <Link 
                to={`/contact?type=service&item=${service.id}`}
                className={styles.sidebarButton}
              >
                Request Service
              </Link>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Have Questions?</h3>
              <p className={styles.sidebarText}>
                Want to learn more about this service? We're here to help!
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

export default ServiceDetail;
