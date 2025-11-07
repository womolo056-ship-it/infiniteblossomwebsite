import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

// Lazy load pages for better initial load
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const ScrollToTop = lazy(() => import('./components/common/ScrollToTop'));

function App() {
  return (
    <>
      <a href="#main" className="skip-to-main">Skip to main content</a>
      <Header />
      <main id="main">
        <Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
