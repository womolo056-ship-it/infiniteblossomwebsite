import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Testimonials.module.css';

function Testimonials() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation({ threshold: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'English Course Student',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      text: 'The English Full Course at Infinite Blossom completely transformed my language skills. The instructors are patient, knowledgeable, and truly care about student success.',
      rating: 5
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      text: 'Their AI automation service revolutionized our business operations. We\'ve seen a 40% increase in efficiency and significant cost savings. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'French Course Student',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      text: 'Learning French with Infinite Blossom was an amazing experience. The course structure is perfect for beginners, and I can now confidently speak French!',
      rating: 5
    },
    {
      id: 4,
      name: 'Carlos Mendes',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      text: 'The social media management service exceeded our expectations. Our engagement increased by 200% in just three months. Professional and creative team!',
      rating: 5
    },
    {
      id: 5,
      name: 'Sofia Rodrigues',
      role: 'AI Course Student',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      text: 'The AI for Everyone course made complex concepts easy to understand. Now I can confidently discuss AI trends and apply them in my work.',
      rating: 5
    },
    {
      id: 6,
      name: 'Pedro Alves',
      role: 'Startup Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      text: 'Infinite Blossom created our company website and it\'s absolutely stunning. Professional, fast, and exactly what we needed to launch our business.',
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
            What Our <span className={styles.highlight}>Clients Say</span>
          </h1>
          <p className={styles.heroDescription}>
            Real stories from real people who have transformed their lives and businesses with Infinite Blossom
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
          <h2 className={styles.ctaTitle}>Ready to Write Your Success Story?</h2>
          <p className={styles.ctaDescription}>
            Join our community of satisfied students and businesses today
          </p>
          <div className={styles.ctaButtons}>
            <a href="/services" className={styles.ctaButton}>
              Explore Services
            </a>
            <a href="/contact" className={styles.ctaButtonSecondary}>
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
