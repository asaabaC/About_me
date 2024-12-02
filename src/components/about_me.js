import React, { useState, useEffect } from 'react';
import '../styles/about_me.css'; // Ensure the CSS file path is correct

const AboutMe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/IMG-20220827-WA0004.jpg",
    "/IMG-20210602-WA0044.jpg",
    "/IMG_20231007_100110_173.jpg",
    "/IMG_20191030_110410.jpg",
    "/1647401525202.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div>
      {/* Page Wrapper */}
      <div className="about_me-container">
        {/* Header Section */}
        <header className="about_me-header">
          <h1>My Journey</h1>
        </header>

        {/* Image Slider Section */}
        <div className="image-slider">
          <div
            className="image-slider-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <section className="about_me-section">
          <h2>Academic and Career Achievements</h2>
          <p>
            I am aged 24, a determined and jolly lady who is passionate about
            changing the community. In spite of my parents being absent in my
            life, I purpose to be a source of hope to others. I have developed a
            strong foundation in technology and have worked on impactful
            projects such as the Innerman Pre and Primary School Web System,
            which helps parents apply on and off campus, stay informed about
            events at the school, and understand the fees structure.
          </p>
          <h2>Faith and Community Involvement</h2>
          <p>
            My faith has been a constant source of strength and inspiration
            throughout my journey. I am actively involved in Sunday School at
            United Christian Church, Kasubi, where I have learned about
            childhood development and the importance of community.
          </p>
          <h2>Mentorship and Growth</h2>
          <p>
            I am fortunate to have a strong mentor, Mummy Sarah Koontz, who has
            provided invaluable guidance. Her mentorship has helped me navigate
            challenges and encouraged me to strive for excellence.
          </p>
          <h2>Future Vision</h2>
          <p>
            My vision for the future is to inspire and empower others,
            particularly women, to embrace technology and pursue their dreams.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
