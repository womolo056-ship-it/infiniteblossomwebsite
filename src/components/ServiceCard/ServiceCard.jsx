import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyImage from '../common/LazyImage';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ item, type = 'course' }) => {
  const isCourse = type === 'course';

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <LazyImage
          src={item.image}
          alt={item.title}
          className={styles.image}
        />
        <div className={styles.category}>{item.category}</div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
        
        {isCourse && (
          <div className={styles.meta}>
            {item.duration && (
              <span className={styles.metaItem}>
                <strong>Duração:</strong> {item.duration}
              </span>
            )}
            {item.level && (
              <span className={styles.metaItem}>
                <strong>Nível:</strong> {item.level}
              </span>
            )}
          </div>
        )}
        
        {!isCourse && item.features && (
          <ul className={styles.features}>
            {item.features.map((feature, index) => (
              <li key={index} className={styles.feature}>
                <FaCheckCircle className={styles.checkIcon} aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className={styles.actions}>
          <Link 
            to={`/${type}/${item.id}`}
            className={styles.learnMoreLink}
            aria-label={`Saiba mais sobre ${item.title}`}
          >
            Saiba Mais →
          </Link>
        </div>
        
        <div className={styles.footer}>
          <div className={styles.price}>{item.price}</div>
          <Link 
            to={`/contact?type=${type}&item=${item.id}`}
            className={styles.button} 
            aria-label={`Inscrever-se em ${item.title}`}
          >
            Inscrever-se
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
