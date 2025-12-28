import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isDark, setIsDark] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.contact-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`contact-wrapper ${isDark ? 'contact-dark' : 'contact-light'}`}>
      <div className="contact-container">
        {/* Animated Wave Background */}
        <div className="contact-wave-container">
          <svg className="contact-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path className="contact-wave-path-1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="contact-wave contact-wave-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path className="contact-wave-path-2" d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="contact-wave contact-wave-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path className="contact-wave-path-3" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <button 
          className="contact-theme-toggle"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        <div className="contact-hero contact-animate">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">We'd love to hear from you. Let's make something amazing together.</p>
        </div>

        <div className="contact-quick-links contact-animate">
          <div className="contact-quick-card">
            <div className="contact-quick-icon">
              <Mail size={32} />
            </div>
            <h3>Quick Answers</h3>
            <p>Find brief answers to your short questions here.</p>
            <a href="#" className="contact-quick-link">Read More</a>
          </div>

          <div className="contact-quick-card">
            <div className="contact-quick-icon">
              <Phone size={32} />
            </div>
            <h3>Let's Talk</h3>
            <p>Pick up the phone to chat with a member of our team.</p>
            <a href="tel:+1234567890" className="contact-quick-link">Call Us</a>
          </div>

          <div className="contact-quick-card">
            <div className="contact-quick-icon">
              <MapPin size={32} />
            </div>
            <h3>We are Social</h3>
            <p>Get involved in making the dream a reality today.</p>
            <a href="#" className="contact-quick-link">Join our Community</a>
          </div>

          <div className="contact-quick-card">
            <div className="contact-quick-icon">
              <Send size={32} />
            </div>
            <h3>Support</h3>
            <p>We're here to help with any questions or queries.</p>
            <a href="#" className="contact-quick-link">Help & Support</a>
          </div>
        </div>

        <div className="contact-main-section">
          <div className="contact-form-section contact-animate">
            <h2 className="contact-section-title">Keep in touch. We'd love to hear from you</h2>
            <p className="contact-section-subtitle">
              If you prefer to send us a message, please complete the form below and we will get right back to you.
            </p>

            <div className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email" className="contact-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-textarea"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                onClick={handleSubmit}
                className={`contact-submit-btn ${isSubmitting ? 'contact-submitting' : ''} ${submitSuccess ? 'contact-success' : ''}`}
                disabled={isSubmitting}
              >
                {submitSuccess ? (
                  <>✓ Message Sent!</>
                ) : isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>Submit <Send size={18} /></>
                )}
              </button>
            </div>
          </div>

          <div className="contact-map-section contact-animate">
            <div className="contact-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.236743834823!2d77.21526431508043!3d28.61394348241808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                className="contact-map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="contact-info-cards">
              <div className="contact-info-card">
                <Phone size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (234) 567-8900</p>
                </div>
              </div>

              <div className="contact-info-card">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>hello@company.com</p>
                </div>
              </div>

              <div className="contact-info-card">
                <MapPin size={24} />
                <div>
                  <h4>Address</h4>
                  <p>123 Business Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="contact-social-icons">
                <a href="#" className="contact-social-icon"><Facebook size={20} /></a>
                <a href="#" className="contact-social-icon"><Twitter size={20} /></a>
                <a href="#" className="contact-social-icon"><Instagram size={20} /></a>
                <a href="#" className="contact-social-icon"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;