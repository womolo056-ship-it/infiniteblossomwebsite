import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import { FaBook, FaUsers, FaCertificate, FaGraduationCap, FaLanguage, FaRobot, FaBullhorn, FaGlobe } from 'react-icons/fa';

const Statistics = lazy(() => import('../components/Statistics'));
const Categories = lazy(() => import('../components/Categories'));

function Home() {
  // Statistics data
  const statsData = [
    {
      icon: <FaBook />,
      value: '10+',
      label: 'Quality Courses'
    },
    {
      icon: <FaUsers />,
      value: '500+',
      label: 'Happy Students'
    },
    {
      icon: <FaCertificate />,
      value: '300+',
      label: 'Certificates Issued'
    },
    {
      icon: <FaGraduationCap />,
      value: '15+',
      label: 'Expert Instructors'
    }
  ];

  // Categories data - matching actual services
  const categoriesData = [
    {
      id: 'languages',
      name: 'Language Courses',
      icon: <FaLanguage />,
      color: '#4ECDC4'
    },
    {
      id: 'ai-courses',
      name: 'AI & Technology',
      icon: <FaRobot />,
      color: '#FF6B6B'
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      icon: <FaRobot />,
      color: '#FFD93D'
    },
    {
      id: 'marketing',
      name: 'Digital Marketing',
      icon: <FaBullhorn />,
      color: '#A8E6CF'
    },
    {
      id: 'web-dev',
      name: 'Web Development',
      icon: <FaGlobe />,
      color: '#B4A7D6'
    }
  ];

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <Suspense fallback={<div style={{ minHeight: '200px' }} aria-label="Loading statistics" />}>
        <div id="statistics">
          <Statistics stats={statsData} />
        </div>
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} aria-label="Loading categories" />}>
        <div id="services">
          <Categories categories={categoriesData} />
        </div>
      </Suspense>
    </>
  );
}

export default Home;
