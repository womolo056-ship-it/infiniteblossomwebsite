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
            Nossos <span className={styles.highlight}>Serviços</span> e Cursos
          </h1>
          <p className={styles.heroDescription}>
            Descubra nossa ampla gama de cursos e serviços profissionais projetados para ajudá-lo a crescer e ter sucesso.
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
            Cursos Disponíveis
          </h2>
          <p className={styles.sectionDescription}>
            Aprimore suas habilidades com nossos cursos ministrados por especialistas em idiomas e tecnologia.
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
            Serviços Profissionais
          </h2>
          <p className={styles.sectionDescription}>
            Transforme seu negócio com nossas soluções digitais de ponta e serviços de marketing.
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
            Pronto para Começar?
          </h2>
          <p className={styles.ctaDescription}>
            Entre em contato conosco hoje para saber mais sobre nossos cursos e serviços, ou para discutir suas necessidades personalizadas.
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:+244975359736" className={styles.ctaButton}>
              Ligue Agora
            </a>
            <a href="mailto:evaristokakumba101@gmail.com" className={styles.ctaButtonSecondary}>
              Enviar Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
