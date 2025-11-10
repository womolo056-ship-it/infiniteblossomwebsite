import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './About.module.css';

function About() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.2 });

  const values = [
    {
      title: 'Excelência',
      description: 'Buscamos a excelência em tudo o que fazemos, desde o conteúdo do curso até o atendimento ao cliente.',
      icon: '🎯'
    },
    {
      title: 'Inovação',
      description: 'Abraçamos novas tecnologias e métodos de ensino para proporcionar a melhor experiência de aprendizagem.',
      icon: '💡'
    },
    {
      title: 'Acessibilidade',
      description: 'Educação e serviços de qualidade devem ser acessíveis a todos, independentemente da origem.',
      icon: '🌍'
    },
    {
      title: 'Crescimento',
      description: 'Acreditamos no crescimento e melhoria contínuos tanto para nossos alunos quanto para nossa equipe.',
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
            Sobre a <span className={styles.highlight}>Infinite Blossom</span>
          </h1>
          <p className={styles.heroDescription}>
            Capacitando indivíduos e empresas através da educação e soluções digitais inovadoras
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
              <h2 className={styles.sectionTitle}>Nossa Missão</h2>
              <p className={styles.paragraph}>
                Na Infinite Blossom, somos dedicados a transformar vidas através de educação de qualidade e serviços digitais de ponta. Acreditamos que todos merecem acesso a oportunidades de aprendizagem de classe mundial e soluções empresariais inovadoras.
              </p>
              <p className={styles.paragraph}>
                Nossa equipe de educadores experientes e especialistas digitais trabalha incansavelmente para criar cursos e serviços que não apenas atendem, mas superam as expectativas. Combinamos excelência de ensino tradicional com tecnologia moderna para entregar resultados que importam.
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
            Nossos Valores Fundamentais
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
            <h2 className={styles.sectionTitle}>Nossa História</h2>
            <p className={styles.paragraph}>
              A Infinite Blossom foi fundada com uma visão simples, mas poderosa: criar uma plataforma onde a aprendizagem encontra a inovação. O que começou como uma pequena escola de idiomas cresceu para se tornar um provedor abrangente de educação e serviços digitais.
            </p>
            <p className={styles.paragraph}>
              Hoje, servimos milhares de alunos e empresas, ajudando-os a alcançar seus objetivos através de nossa diversa gama de cursos e serviços profissionais. Da educação em idiomas à automação de IA, continuamos a expandir nossas ofertas para atender às necessidades em evolução de nossa comunidade.
            </p>
            <p className={styles.paragraph}>
              Nosso sucesso é medido não apenas em números, mas nas vidas transformadas de nossos alunos e nos negócios prósperos que ajudamos a crescer. Todos os dias, trabalhamos para tornar a educação de qualidade e soluções inovadoras acessíveis a todos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Pronto para Começar Sua Jornada?</h2>
          <p className={styles.ctaDescription}>
            Junte-se a milhares de alunos e empresas satisfeitos que transformaram seu futuro com a Infinite Blossom.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/services" className={styles.ctaButton}>
              Explorar Nossos Serviços
            </a>
            <a href="/contact" className={styles.ctaButtonSecondary}>
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
