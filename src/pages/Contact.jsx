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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare data for webhook
    const webhookData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      type: selectedItem ? selectedItem.type : 'general',
      itemTitle: selectedItem ? selectedItem.title : null,
      itemId: selectedItem ? selectedItem.id : null,
      itemPrice: selectedItem ? selectedItem.price : null,
      timestamp: new Date().toISOString()
    };

    console.log('Sending data to webhook:', webhookData);

    try {
      // Send to n8n production webhook
      const response = await fetch('https://tijoweb.app.n8n.cloud/webhook/7aee2a59-fd71-488c-9bd6-36e9a5339dcb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(webhookData)
      });

      console.log('Response status:', response.status);
      const responseData = await response.text();
      console.log('Response data:', responseData);

      // Check if response is ok or if it's a 2xx status
      if (response.ok || (response.status >= 200 && response.status < 300)) {
        alert('Obrigado! Sua mensagem foi enviada com sucesso.');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        console.error('Webhook error:', response.status, responseData);
        alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>
            {selectedItem ? 'Inscreva-se Agora' : 'Entre em Contato'}
          </h1>
          <p className={styles.heroDescription}>
            {selectedItem 
              ? `Preencha o formulário abaixo para se inscrever em ${selectedItem.title}`
              : 'Adoraríamos ouvir de você. Envie-nos uma mensagem e responderemos o mais breve possível.'}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            {selectedItem && (
              <div className={styles.selectedItem}>
                <h2>{selectedItem.type === 'course' ? 'Curso' : 'Serviço'} Selecionado</h2>
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
                  Nome Completo <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  placeholder="Digite seu nome completo"
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
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Número de Telefone <span className={styles.required}>*</span>
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
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows="5"
                  placeholder="Conte-nos mais sobre você ou quaisquer perguntas que tenha..."
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h2>Informações de Contato</h2>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <a href="mailto:evaristokakumba101@gmail.com">evaristokakumba101@gmail.com</a>
            </div>
            <div className={styles.infoItem}>
              <h3>Telefone</h3>
              <a href="tel:+244975359736">+244 975 359 736</a>
            </div>
            <div className={styles.infoItem}>
              <h3>Horário de Atendimento</h3>
              <p>Segunda - Sexta: 9:00 - 18:00</p>
              <p>Sábado: 10:00 - 16:00</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
