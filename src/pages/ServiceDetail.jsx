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
        <h1>Serviço Não Encontrado</h1>
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
              <h2 className={styles.sectionTitle}>Visão Geral do Serviço</h2>
              <p className={styles.text}>{service.description}</p>
            </div>

            {/* Features */}
            {service.features && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>O Que Está Incluído</h2>
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
              <h2 className={styles.sectionTitle}>Nossa Abordagem</h2>
              <p className={styles.text}>
                Na Infinite Blossom, combinamos tecnologia de ponta com serviço personalizado 
                para entregar resultados excepcionais. Nossa equipe de especialistas trabalha em estreita colaboração com você para 
                entender suas necessidades únicas e criar soluções personalizadas que geram valor real para o negócio.
              </p>
              <ul className={styles.list}>
                <li>Consulta inicial para entender seus objetivos</li>
                <li>Desenvolvimento de estratégia personalizada</li>
                <li>Implementação e execução profissional</li>
                <li>Suporte contínuo e otimização</li>
                <li>Relatórios regulares de progresso e análises</li>
              </ul>
            </div>

            {/* Meet the Team */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Conheça Nosso CEO</h2>
              <div className={styles.ceoSection}>
                <img src={CEOImage} alt="CEO da Infinite Blossom" className={styles.ceoImage} loading="lazy" />
                <div className={styles.ceoInfo}>
                  <h3 className={styles.ceoName}>Evaristo Miguel</h3>
                  <p className={styles.ceoTitle}>CEO e Fundador</p>
                  <p className={styles.text}>
                    Liderando uma equipe de especialistas digitais, nosso CEO traz anos de experiência em 
                    tecnologia e inovação empresarial. Estamos comprometidos em ajudar as empresas 
                    a prosperar na era digital através de soluções inovadoras e serviço excepcional.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Por Que Escolher a Infinite Blossom?</h2>
              <div className={styles.whyGrid}>
                <div className={styles.whyCard}>
                  <h3>Expertise</h3>
                  <p>Anos de experiência entregando projetos bem-sucedidos</p>
                </div>
                <div className={styles.whyCard}>
                  <h3>Qualidade</h3>
                  <p>Compromisso com a excelência em cada detalhe</p>
                </div>
                <div className={styles.whyCard}>
                  <h3>Suporte</h3>
                  <p>Equipe dedicada disponível para ajudá-lo a ter sucesso</p>
                </div>
                <div className={styles.whyCard}>
                  <h3>Resultados</h3>
                  <p>Histórico comprovado de entrega de resultados mensuráveis</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={styles.ctaSection}>
              <h2 className={styles.ctaTitle}>Pronto para Começar?</h2>
              <p className={styles.text}>
                Vamos discutir como podemos ajudar a transformar seu negócio com nossos serviços profissionais.
              </p>
              <Link 
                to={`/contact?type=service&item=${service.id}`}
                className={styles.ctaButton}
              >
                Entre em Contato
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Detalhes do Serviço</h3>
              <div className={styles.sidebarItem}>
                <strong>Preço:</strong> {service.price}
              </div>
              <div className={styles.sidebarItem}>
                <strong>Categoria:</strong> {service.category}
              </div>
              <Link 
                to={`/contact?type=service&item=${service.id}`}
                className={styles.sidebarButton}
              >
                Solicitar Serviço
              </Link>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Tem Perguntas?</h3>
              <p className={styles.sidebarText}>
                Quer saber mais sobre este serviço? Estamos aqui para ajudar!
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

export default ServiceDetail;
