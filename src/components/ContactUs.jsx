import React from 'react';
import Title from './Title';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white"
    >
      <Title
        title="Let's Build Your AI Future"
        desc="Ready to automate your business with AI agents, chatbots, or custom workflows? Share your challenge and we'll show you what's possible."
      />
      {/* Zoho Forms Embed */}
      <iframe
  aria-label="Contact Us"
  frameBorder="0"
  style={{ height: "500px", width: "99%", border: "none" }}
  src="https://forms.zohopublic.com/vvr111298zoho1/form/ContactUs/formperma/p3bLdipmbRlJJdU6j6KnZwc-kCEZaIsMVMu1Bc5MZP4"
  title="Contact Us"
/>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400"
      >
        <p>🔒 Your information is secure and confidential.</p>
        <p className="mt-1">
          We typically respond within 24 hours with personalized automation recommendations.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
