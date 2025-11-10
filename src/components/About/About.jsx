import { FaCheckCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import styles from './About.module.css'

function About() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2 });

  const features = [
    'Instrutores especializados com experiência na indústria',
    'Horários de aprendizagem flexíveis que se adaptam ao seu estilo de vida',
    'Currículo abrangente cobrindo todos os níveis de habilidade',
    'Acesso vitalício aos materiais do curso e atualizações'
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
              <div className={styles.badge} role="img" aria-label="Mais de 10 anos de experiência">
                <div className={styles.badgeIcon} aria-hidden="true">🏆</div>
                <div className={styles.badgeText}>
                  <div className={styles.badgeNumber}>10+</div>
                  <div className={styles.badgeLabel}>Anos de Experiência</div>
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
            <div className={styles.sectionLabel}>Sobre Nós</div>
            <h2 id="about-heading" className={styles.heading}>
              Proporcionamos a <span className={styles.highlight}>Melhor</span> Experiência de Aprendizagem
            </h2>
            <p className={styles.description}>
              Na Infinite Blossom, acreditamos em capacitar indivíduos através de educação de qualidade. 
              Nossa plataforma oferece uma gama diversificada de cursos projetados para ajudá-lo a alcançar seus objetivos 
              pessoais e profissionais. Com tecnologia de ponta e instrutores especializados, tornamos 
              a aprendizagem acessível, envolvente e eficaz.
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
