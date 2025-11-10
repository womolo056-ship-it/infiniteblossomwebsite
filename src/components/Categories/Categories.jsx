import { FaCode, FaPalette, FaBriefcase, FaCamera, FaMusic, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Categories.module.css';

const CategoryCard = ({ category }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Handle category selection (can be extended with onClick prop)
      console.log(`Selected category: ${category.name}`);
    }
  };

  return (
    <div 
      className={styles.categoryCard}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`View ${category.name} courses`}
    >
      <div className={styles.iconWrapper} style={{ backgroundColor: category.color }} aria-hidden="true">
        {category.icon}
      </div>
      <h3 className={styles.categoryName}>{category.name}</h3>
    </div>
  );
};

const Categories = ({ categories }) => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.5 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.2 });

  // Default categories data if none provided
  const defaultCategories = [
    {
      id: 'development',
      name: 'Desenvolvimento',
      icon: <FaCode />,
      color: '#4ECDC4'
    },
    {
      id: 'design',
      name: 'Design',
      icon: <FaPalette />,
      color: '#FF6B6B'
    },
    {
      id: 'business',
      name: 'Negócios',
      icon: <FaBriefcase />,
      color: '#FFD93D'
    },
    {
      id: 'photography',
      name: 'Fotografia',
      icon: <FaCamera />,
      color: '#A8E6CF'
    },
    {
      id: 'music',
      name: 'Música',
      icon: <FaMusic />,
      color: '#FFB6C1'
    },
    {
      id: 'marketing',
      name: 'Marketing',
      icon: <FaChartLine />,
      color: '#B4A7D6'
    }
  ];

  const categoriesData = categories || defaultCategories;

  return (
    <section className={styles.categories} aria-labelledby="categories-heading">
      <div className={styles.container}>
        <h2 
          id="categories-heading"
          ref={headingRef}
          className={`${styles.sectionHeading} fade-in ${headingVisible ? 'visible' : ''}`}
        >
          Principais Categorias
        </h2>
        <div 
          ref={gridRef}
          className={`${styles.categoriesGrid} stagger-children ${gridVisible ? 'visible' : ''}`}
          role="group"
          aria-label="Course categories"
        >
          {categoriesData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        <div className={styles.viewAllWrapper}>
          <Link to="/services" className={styles.viewAllButton}>
            Ver Todos os Serviços e Cursos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
