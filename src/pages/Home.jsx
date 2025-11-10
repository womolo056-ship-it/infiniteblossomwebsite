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
      label: 'Cursos de Qualidade'
    },
    {
      icon: <FaUsers />,
      value: '500+',
      label: 'Alunos Satisfeitos'
    },
    {
      icon: <FaCertificate />,
      value: '300+',
      label: 'Certificados Emitidos'
    },
    {
      icon: <FaGraduationCap />,
      value: '15+',
      label: 'Instrutores Especializados'
    }
  ];

  // Categories data - matching actual services
  const categoriesData = [
    {
      id: 'languages',
      name: 'Cursos de Idiomas',
      icon: <FaLanguage />,
      color: '#4ECDC4'
    },
    {
      id: 'ai-courses',
      name: 'IA e Tecnologia',
      icon: <FaRobot />,
      color: '#FF6B6B'
    },
    {
      id: 'ai-automation',
      name: 'Automação de IA',
      icon: <FaRobot />,
      color: '#FFD93D'
    },
    {
      id: 'marketing',
      name: 'Marketing Digital',
      icon: <FaBullhorn />,
      color: '#A8E6CF'
    },
    {
      id: 'web-dev',
      name: 'Desenvolvimento Web',
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
