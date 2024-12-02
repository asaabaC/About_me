import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home'; // Ensure the path is correct
import AboutMe from './components/about_me'; // Ensure the path is correct
import ContactMe from './components/contact_me'; // Import the ContactMe component
import Footer from './components/footer'; // Ensure this file exists
import './App.css'; // Ensure this file exists

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Horizontal Navigation Bar */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about_me">About Me</Link></li>
            <li><Link to="/contact_me">Contact Me</Link></li>
          </ul>
        </nav>

        <main>
          {/* Define routes for Home, About Me, and Contact Me components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/contact_me" element={<ContactMe />} /> {/* Render Contact Me here */}
          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
