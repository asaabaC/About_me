import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img
        src={`${process.env.PUBLIC_URL}/08b6d6838a3ef3d168bb87eade481522 (1).jpg`}
        alt="Asaaba Shallot"
        className="home-image"
      />

      <div className="white-box">
        <header>
          <h1>Explore Asaaba Shallot's World</h1>
          <p>
            Lady after God's own heart | Born Again | Virtual Assistant | Educator | Personal Growth Guide | Community
            Advocate | Dedicated to Making a Difference | Social Media Management | Remote Work Specialist | Content
            Writing
          </p>
        </header>

        <section>
          <h2>About Me</h2>
          <p>Learn more about my journey and the projects I am passionate about.</p>
          <Link to="/about_me">Read More</Link>
        </section>

        <section>
          <h2>My Projects</h2>
          <ul>
            <li>Sentiment Analysis of Social Media Posts</li>
            <li>Website for Arise, Love, and Serve Africa (ALSA)</li>
            <li>Innerman Pre and Primary School Web System</li>
          </ul>
        </section>

        <section>
          <h2>Mentorship & Certifications</h2>
          <ul>
            <li><strong>Mentorship Skills Certificate</strong> from Makerere University (2019)</li>
            <li><strong>Chatbots Training Program</strong> at WITU (2023)</li>
            <li>
              <strong>Undergraduate Short Course on One Health Principles & Practice in Infectious Disease
                Management</strong>, organized by AfroHUN, College of Veterinary Medicine Resources & Biosecurity, and
              Makerere University (2021)
            </li>
          </ul>
        </section>

        <section>
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>
              <strong>Technical Skills:</strong>
              <ul>
                <li>Web Development (React, JavaScript, HTML, CSS)</li>
                <li>Backend Development (Flask, Python, MySQL)</li>
                <li>Data Analysis & Visualization (Python, Pandas, Matplotlib)</li>
                <li>Machine Learning & Sentiment Analysis (TensorFlow, NLP)</li>
                <li>Chatbot Development (WITU Training, 2023)</li>
                <li>Mobile App Development (Flutter)</li>
              </ul>
            </li>
            <li className="skills-spacing"></li>
            <li>
              <strong>Community Engagement & Advocacy:</strong>
              <ul>
                <li>Educator and Mentor (e.g., Sunday School at United Christian Church)</li>
                <li>Empowering Youth & Women (ALSA and mentorship programs)</li>
                <li>Personal Growth and Leadership (self-improvement and leadership initiatives)</li>
              </ul>
            </li>
            <li className="skills-spacing"></li>
            <li>
              <strong>Soft Skills:</strong>
              <ul>
                <li>Leadership and Team Collaboration (e.g., leading projects and managing teams)</li>
                <li>Communication and Social Media Management (Virtual Assistant roles and content writing)</li>
                <li>Problem-Solving and Analytical Thinking (e.g., Sentiment Analysis and web systems projects)</li>
              </ul>
            </li>
          </ul>
        </section>

        <footer>
          <p>
            Connect with me on my{' '}
            <a href="https://www.linkedin.com/in/shallot-asaaba" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{' '}
            and{' '}
            <a href="https://github.com/asaabaC" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
