import { FaCheckCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import styles from './About.module.css'

function About() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2 });

  const features = [
    'Expert instructors with industry experience',
    'Flexible learning schedules that fit your lifestyle',
    'Comprehensive curriculum covering all skill levels',
    'Lifetime access to course materials and updates'
  ]

  return (
    <section className={styles.about} aria-labelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Image Section - Left Column */}
          <div 
            ref={imageRef}
            className={`${styles.imageSection} fade-in-left ${imageVisible ? 'visible' : ''}`}
          >
            <div className={styles.imageWrapper}>
              {/* Image Collage */}
              <div className={styles.imageCollage}>
                {/* Main Large Image */}
                <div className={styles.mainImage} role="img" aria-label="Students engaged in collaborative learning">
                  <span className={styles.placeholderText}>Students Learning</span>
                </div>
                
                {/* Secondary Small Image */}
                <div className={styles.secondaryImage} role="img" aria-label="Educational resources and books">
                  <span className={styles.placeholderText}>📚</span>
                </div>
              </div>
              
              {/* Decorative Badge/Award Element */}
              <div className={styles.badge} role="img" aria-label="10 plus years of experience award">
                <div className={styles.badgeIcon} aria-hidden="true">🏆</div>
                <div className={styles.badgeText}>
                  <div className={styles.badgeNumber}>10+</div>
                  <div className={styles.badgeLabel}>Years Experience</div>
                </div>
              </div>
              
              {/* Background Decorative Shapes */}
              <div className={styles.decorativeCircle} aria-hidden="true"></div>
              <div className={styles.decorativeDots} aria-hidden="true"></div>
              <div className={styles.decorativeSquare} aria-hidden="true"></div>
            </div>
          </div>
          
          {/* Content Section - Right Column */}
          <div 
            ref={textRef}
            className={`${styles.textContent} fade-in-right ${textVisible ? 'visible' : ''}`}
          >
            <div className={styles.sectionLabel}>About Us</div>
            <h2 id="about-heading" className={styles.heading}>
              We Provide The <span className={styles.highlight}>Best</span> Learning Experience
            </h2>
            <p className={styles.description}>
              At Infinite Blossom, we believe in empowering individuals through quality education. 
              Our platform offers a diverse range of courses designed to help you achieve your personal 
              and professional goals. With cutting-edge technology and expert instructors, we make 
              learning accessible, engaging, and effective.
            </p>
            
            {/* Feature List */}
            <ul className={styles.featureList}>
              {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
