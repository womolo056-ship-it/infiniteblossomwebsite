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
        <h1>Curso Não Encontrado</h1>
        <Link to="/services">Voltar aos Serviços</Link>
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
              <h2 className={styles.sectionTitle}>Visão Geral do Curso</h2>
              <p className={styles.text}>{course.description}</p>
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <strong>Duração:</strong> {course.duration}
                </div>
                <div className={styles.metaItem}>
                  <strong>Nível:</strong> {course.level}
                </div>
              </div>
            </div>

            {/* Teaching Method */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Nosso Método de Ensino</h2>
              <p className={styles.text}>
                Na Infinite Blossom, acreditamos em aprendizagem interativa e prática. Nossos cursos combinam:
              </p>
              <ul className={styles.list}>
                <li>Sessões ao vivo interativas com instrutores experientes</li>
                <li>Exercícios práticos e aplicações do mundo real</li>
                <li>Feedback personalizado e acompanhamento de progresso</li>
                <li>Turmas pequenas para atenção individual</li>
                <li>Horários flexíveis para se adequar ao seu estilo de vida</li>
              </ul>
            </div>

            {/* Meet the CEO */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Conheça Nosso CEO e Instrutor Principal</h2>
              <div className={styles.ceoSection}>
                <img src={CEOImage} alt="CEO da Infinite Blossom" className={styles.ceoImage} loading="lazy" />
                <div className={styles.ceoInfo}>
                  <h3 className={styles.ceoName}>Evaristo Miguel</h3>
                  <p className={styles.ceoTitle}>CEO e Fundador</p>
                  <p className={styles.text}>
                    Com anos de experiência em educação e uma paixão por capacitar alunos, 
                    nosso CEO lidera uma equipe de instrutores dedicados comprometidos com seu sucesso. 
                    Acreditamos que educação de qualidade deve ser acessível a todos, e trabalhamos 
                    incansavelmente para tornar essa visão uma realidade.
                  </p>
                </div>
              </div>
            </div>

            {/* Partnerships */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Nossas Parcerias Escolares</h2>
              <p className={styles.text}>
                A Infinite Blossom fez parceria com escolas reconhecidas para fornecer educação de qualidade 
                e apoio aos alunos. Nossos eventos de colaboração demonstram nosso compromisso com 
                a excelência educacional e o engajamento comunitário.
              </p>
              <div className={styles.gallery}>
                <img src={CollabImage1} alt="Evento de Colaboração 1" className={styles.galleryImage} loading="lazy" />
                <img src={CollabImage2} alt="Evento de Colaboração 2" className={styles.galleryImage} loading="lazy" />
                <img src={CollabImage3} alt="Evento de Colaboração 3" className={styles.galleryImage} loading="lazy" />
              </div>
            </div>

            {/* CTA */}
            <div className={styles.ctaSection}>
              <h2 className={styles.ctaTitle}>Pronto para Começar a Aprender?</h2>
              <p className={styles.text}>
                Junte-se a centenas de alunos que transformaram suas habilidades com a Infinite Blossom.
              </p>
              <Link 
                to={`/contact?type=course&item=${course.id}`}
                className={styles.ctaButton}
              >
                Inscreva-se Agora
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Detalhes do Curso</h3>
              <div className={styles.sidebarItem}>
                <strong>Preço:</strong> {course.price}
              </div>
              <div className={styles.sidebarItem}>
                <strong>Duração:</strong> {course.duration}
              </div>
              <div className={styles.sidebarItem}>
                <strong>Nível:</strong> {course.level}
              </div>
              <div className={styles.sidebarItem}>
                <strong>Categoria:</strong> {course.category}
              </div>
              <Link 
                to={`/contact?type=course&item=${course.id}`}
                className={styles.sidebarButton}
              >
                Inscreva-se Agora
              </Link>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Precisa de Ajuda?</h3>
              <p className={styles.sidebarText}>
                Tem perguntas sobre este curso? Entre em contato conosco e teremos prazer em ajudar!
              </p>
              <Link to="/contact" className={styles.sidebarLink}>
                Entre em Contato →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
