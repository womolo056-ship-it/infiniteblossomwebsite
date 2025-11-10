import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Testimonials.module.css';

function Testimonials() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation({ threshold: 0.05 });

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Aluna do Curso de Inglês',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      text: 'O Curso Completo de Inglês na Infinite Blossom transformou completamente minhas habilidades linguísticas. Os instrutores são pacientes, conhecedores e realmente se preocupam com o sucesso dos alunos.',
      rating: 5
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Proprietário de Empresa',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      text: 'O serviço de automação de IA revolucionou nossas operações comerciais. Vimos um aumento de 40% na eficiência e economias significativas de custos. Altamente recomendado!',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Aluna do Curso de Francês',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      text: 'Aprender francês com a Infinite Blossom foi uma experiência incrível. A estrutura do curso é perfeita para iniciantes, e agora posso falar francês com confiança!',
      rating: 5
    },
    {
      id: 4,
      name: 'Carlos Mendes',
      role: 'Gerente de Marketing',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      text: 'O serviço de gestão de redes sociais superou nossas expectativas. Nosso engajamento aumentou 200% em apenas três meses. Equipe profissional e criativa!',
      rating: 5
    },
    {
      id: 5,
      name: 'Sofia Rodrigues',
      role: 'Aluna do Curso de IA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      text: 'O curso de IA para Todos tornou conceitos complexos fáceis de entender. Agora posso discutir tendências de IA com confiança e aplicá-las no meu trabalho.',
      rating: 5
    },
    {
      id: 6,
      name: 'Pedro Alves',
      role: 'Fundador de Startup',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      text: 'A Infinite Blossom criou o site da nossa empresa e está absolutamente deslumbrante. Profissional, rápido e exatamente o que precisávamos para lançar nosso negócio.',
      rating: 5
    }
  ];

  return (
    <div className={styles.testimonialsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 
            ref={heroRef}
            className={`${styles.heroTitle} fade-in ${heroVisible ? 'visible' : ''}`}
          >
            O Que Nossos <span className={styles.highlight}>Clientes Dizem</span>
          </h1>
          <p className={styles.heroDescription}>
            Histórias reais de pessoas reais que transformaram suas vidas e negócios com a Infinite Blossom
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div 
            ref={testimonialsRef}
            className={`${styles.testimonialsGrid} stagger-children ${testimonialsVisible ? 'visible' : ''}`}
          >
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>⭐</span>
                  ))}
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.author}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className={styles.authorImage}
                    loading="lazy"
                  />
                  <div className={styles.authorInfo}>
                    <h3 className={styles.authorName}>{testimonial.name}</h3>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Pronto para Escrever Sua História de Sucesso?</h2>
          <p className={styles.ctaDescription}>
            Junte-se à nossa comunidade de alunos e empresas satisfeitos hoje
          </p>
          <div className={styles.ctaButtons}>
            <a href="/services" className={styles.ctaButton}>
              Explorar Serviços
            </a>
            <a href="/contact" className={styles.ctaButtonSecondary}>
              Começar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
