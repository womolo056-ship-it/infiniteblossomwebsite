import { FaBook, FaUsers, FaCertificate, FaGraduationCap } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Statistics.module.css';

const Statistics = ({ stats }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  // Default stats data if none provided
  const defaultStats = [
    {
      icon: <FaBook />,
      value: '10,000+',
      label: 'Online Courses'
    },
    {
      icon: <FaUsers />,
      value: '50,000+',
      label: 'Active Students'
    },
    {
      icon: <FaCertificate />,
      value: '5,000+',
      label: 'Certificates Issued'
    },
    {
      icon: <FaGraduationCap />,
      value: '200+',
      label: 'Expert Instructors'
    }
  ];

  const statsData = stats || defaultStats;

  return (
    <section className={styles.statistics} aria-label="Platform statistics and achievements">
      <div className={styles.container}>
        <div 
          ref={ref}
          className={`${styles.statsGrid} stagger-children ${isVisible ? 'visible' : ''}`}
          role="list"
        >
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statCard} role="listitem">
              <div className={styles.statIcon} aria-hidden="true">
                {stat.icon}
              </div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
