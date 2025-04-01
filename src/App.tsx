import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SysPage2 from './SysPage2/index';
import Home from './Home'; 
import About from './About';
import Services from './Services';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SysPage2 />}>
          <Route index element={<Home />} /> {/* 根路径默认显示 Home */}
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
