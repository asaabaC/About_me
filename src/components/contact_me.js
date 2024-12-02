import React from 'react';
import '../styles/contact_me.css'; // Ensure you create this file for styling

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <h1>Contact Me</h1>
      <p>If you'd like to get in touch, feel free to reach out via any of the following platforms:</p>
      <ul>
        <li>
          <strong>WhatsApp:</strong> <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer">+256 773550413</a>
        </li>
        
        <li>
          <strong>Email:</strong> <a href="mailto:yourname@example.com">asaabacharlotte@gmail.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/shallot-asaaba</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
