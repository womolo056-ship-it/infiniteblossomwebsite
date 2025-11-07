import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiPhone, FiMail, FiX } from 'react-icons/fi';
import SearchIcon from '../../assets/Search.png';
import MenuIcon from '../../assets/Menu.png';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e, href) => {
    // If it's a hash link on the home page
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // For route links, just close the mobile menu
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'Services & Courses', href: '/services', isRoute: true },
    { label: 'About', href: '/about', isRoute: true },
    { label: 'Testimonials', href: '/testimonials', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <a href="tel:+1234567890" className={styles.contactLink} aria-label="Call us at +1 (234) 567-890">
                <FiPhone className={styles.icon} aria-hidden="true" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@infiniteblossom.com" className={styles.contactLink} aria-label="Email us at info@infiniteblossom.com">
                <FiMail className={styles.icon} aria-hidden="true" />
                <span>info@infiniteblossom.com</span>
              </a>
            </div>
            <div className={styles.authLinks}>
              <a href="#login" className={styles.authLink}>Login</a>
              <span className={styles.separator} aria-hidden="true">/</span>
              <a href="#register" className={styles.authLink}>Register</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.navigation} aria-label="Main navigation">
        <div className={styles.container}>
          <div className={styles.navContent}>
            {/* Logo */}
            <Link to="/" className={styles.logo} aria-label="Infinite Blossom - Home">
              <div className={styles.logoIcon} aria-hidden="true">IB</div>
              <span className={styles.logoText}>Infinite Blossom</span>
            </Link>

            {/* Desktop Navigation Menu */}
            <ul className={styles.navMenu}>
              {navLinks.map((link) => {
                if (link.isRoute) {
                  return (
                    <li key={link.label}>
                      <NavLink 
                        to={link.href} 
                        className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  );
                } else {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <button className={styles.iconButton} aria-label="Search">
                <img src={SearchIcon} alt="Search" className={styles.iconImage} />
              </button>
              <button 
                className={styles.mobileMenuButton}
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <FiX aria-hidden="true" />
                ) : (
                  <img src={MenuIcon} alt="Menu" className={styles.iconImage} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <nav 
          id="mobile-menu"
          className={styles.mobileMenuOverlay}
          aria-label="Mobile navigation"
        >
          <ul className={styles.mobileMenu}>
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <li key={link.label}>
                    <NavLink 
                      to={link.href} 
                      className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              } else {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className={`${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
