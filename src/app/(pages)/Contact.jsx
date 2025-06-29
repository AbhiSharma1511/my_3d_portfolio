import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/hoc';
import { slideIn } from '@/utils/motion';
import { styles } from '@/styles';
import { EarthCanvas, StarsCanvas } from './canvas';
import emailjs from '@emailjs/browser';

// service_kjfrqse
// template_4s21gke
// 9M2koGD-kYGwMv_yE


const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_kjfrqse',       // Replace with your actual service ID
        'template_4s21gke',      // Replace with your actual template ID
        {
          to_name: form.name,
          to_email: form.email,
          message: form.message,
        },
        '9M2koGD-kYGwMv_yE'        // Replace with your actual public key
      ).then(() => {
        setLoading(false)
        setForm({ name: '', email: '', message: '' });
        alert('Thank you for your message!');
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p className={`${styles.sectionSubText} text-white`}>Get in touch</p>
      <h3 className={`${styles.sectionHeadText} text-white`}>Contact.</h3>
      <div className="flex flex-col md:flex-row gap-10 overflow-hidden">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-gradient-to-br from-[#1f1534] to-[#1e1133] p-8 rounded-2xl shadow-lg"
        >


          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            <div className="flex flex-col">
              <label className="text-white font-semibold mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-[#2a2a4e] py-3 px-5 placeholder:text-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-semibold mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="bg-[#2a2a4e] py-3 px-5 placeholder:text-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-semibold mb-2">Your Message</label>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Let's work together!"
                className="bg-[#2a2a4e] py-3 px-5 placeholder:text-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 px-6 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="flex-1 h-[500px] md:h-auto"
        >
          <EarthCanvas />
          <StarsCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
