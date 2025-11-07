import { FaArrowRight } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import CollabImage from '../../assets/Colaborationevent1 (1).jpg'
import styles from './Hero.module.css'

function Hero() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Decorative Background Elements */}
      <div className={styles.decorativeCircle1} aria-hidden="true"></div>
      <div className={styles.decorativeCircle2} aria-hidden="true"></div>
      <div className={styles.decorativeDots} aria-hidden="true"></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div 
            ref={textRef}
            className={`${styles.textContent} fade-in-left ${textVisible ? 'visible' : ''}`}
          >
            <h1 id="hero-heading" className={styles.headline}>
              The <span className={styles.highlight}>Best</span> Online Learning Platform
            </h1>
            <p className={styles.description}>
              Unlock your potential with our comprehensive courses designed by industry experts. 
              Learn at your own pace and achieve your goals with Infinite Blossom.
            </p>
            <button className={styles.ctaButton}>
              Get Started
              <FaArrowRight className={styles.buttonIcon} />
            </button>
          </div>
          
          <div 
            ref={imageRef}
            className={`${styles.imageContent} fade-in-right ${imageVisible ? 'visible' : ''}`}
          >
            <div className={styles.heroImageWrapper}>
              {/* Main Hero Image */}
              <div className={styles.heroImagePlaceholder} role="img" aria-label="Students engaged in online learning">
                <img 
                  src={CollabImage} 
                  alt="Infinite Blossom collaboration event with students" 
                  className={styles.heroImage}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Decorative Wave Pattern */}
              <svg className={styles.wavePattern} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="var(--color-accent)" d="M45.3,-57.5C58.9,-49.1,70.5,-35.3,74.8,-19.4C79.1,-3.5,76.1,14.5,68.5,29.1C60.9,43.7,48.7,54.9,34.8,61.5C20.9,68.1,5.3,70.1,-10.5,68.3C-26.3,66.5,-42.3,60.9,-54.8,51.1C-67.3,41.3,-76.3,27.3,-78.8,12.1C-81.3,-3.1,-77.3,-19.5,-68.8,-32.5C-60.3,-45.5,-47.3,-55.1,-33.3,-63.3C-19.3,-71.5,-4.3,-78.3,9.5,-79.8C23.3,-81.3,31.7,-65.9,45.3,-57.5Z" transform="translate(100 100)" />
              </svg>
              
              {/* Small Profile Images Overlay */}
              <div className={styles.profileOverlay} aria-hidden="true">
                <div className={styles.profileImage1}>
                  <span>👨‍🎓</span>
                </div>
                <div className={styles.profileImage2}>
                  <span>👩‍💼</span>
                </div>
                <div className={styles.profileImage3}>
                  <span>👨‍💻</span>
                </div>
              </div>
              
              {/* Decorative Geometric Patterns */}
              <div className={styles.geometricPattern1} aria-hidden="true"></div>
              <div className={styles.geometricPattern2} aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
