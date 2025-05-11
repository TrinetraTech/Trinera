import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import your page components
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
function App() {  
  return (
    <Router>
      {/* Always visible at the top */}
      <Header />

      {/* Changes based on route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Optional: Add a 404 page for unmatched routes */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Always visible at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;