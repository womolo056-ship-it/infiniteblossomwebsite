import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import CourseDetail from './pages/CourseDetail';
import ServiceDetail from './pages/ServiceDetail';

const ScrollToTop = lazy(() => import('./components/common/ScrollToTop'));

function App() {
  return (
    <>
      <a href="#main" className="skip-to-main">Skip to main content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
