import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { courses } from '../data/courses';
import { services } from '../data/services';
import styles from './Contact.module.css';

function Contact() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const type = searchParams.get('type');
    const itemId = searchParams.get('item');
    
    if (type && itemId) {
      const allItems = [...courses, ...services];
      const item = allItems.find(i => i.id === itemId);
      if (item) {
        setSelectedItem({ ...item, type });
      }
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body
    const subject = selectedItem 
      ? `Subscription Request: ${selectedItem.title}`
      : 'Contact Form Submission';
    
    const body = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

${selectedItem ? `Interested in: ${selectedItem.title} (${selectedItem.type})` : ''}

Message:
${formData.message}
    `.trim();

    // Open email client
    window.location.href = `mailto:info@infiniteblossom.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>
            {selectedItem ? 'Subscribe Now' : 'Get in Touch'}
          </h1>
          <p className={styles.heroDescription}>
            {selectedItem 
              ? `Fill out the form below to subscribe to ${selectedItem.title}`
              : 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            {selectedItem && (
              <div className={styles.selectedItem}>
                <h2>Selected {selectedItem.type === 'course' ? 'Course' : 'Service'}</h2>
                <div className={styles.itemCard}>
                  <img src={selectedItem.image} alt={selectedItem.title} className={styles.itemImage} />
                  <div className={styles.itemInfo}>
                    <h3>{selectedItem.title}</h3>
                    <p className={styles.itemPrice}>{selectedItem.price}</p>
                  </div>
                </div>
              </div>
            )}

            <form 
              ref={formRef}
              className={`${styles.form} fade-in ${formVisible ? 'visible' : ''}`}
              onSubmit={handleSubmit}
            >
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  placeholder="+244 XXX XXX XXX"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows="5"
                  placeholder="Tell us more about yourself or any questions you have..."
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <a href="mailto:info@infiniteblossom.com">info@infiniteblossom.com</a>
            </div>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className={styles.infoItem}>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
