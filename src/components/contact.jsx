import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const ContactSection = ({ isMoon }) => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    try {
      // 1. Send message to you
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Auto-reply to user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_TEMPLATE_ID,
        {
          user_name: name,
          user_email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('✅ Message sent and auto-reply triggered!');
      form.current.reset();
    } catch (error) {
      toast.error('❌ Email failed: ' + (error.text || 'Unknown error'));
      console.error('EmailJS error:', error);
    }
  };

  return (
    <div className={`contact-section ${isMoon ? 'moon' : 'sun'}`} id="contact">
      <div className="glass-card">
        <h2 className="heading">Let’s Connect</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input name="user_name" type="text" placeholder="Your Name" required />
          <input name="user_email" type="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send</button>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default ContactSection;
