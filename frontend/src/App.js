import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import GDP from './GraphicDesignPORT';
import WDP from './WebDevPORT';
import PhP from './PhotographyPort';
import AboutUs from './AboutUs';
import BookNow from './BookNow';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Blog';

import Footer from './Footer';

import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <div>
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/GDandM" element={<GDP />} />
          <Route path="/WDP" element={<WDP />} />
          <Route path="/PhP" element={<PhP />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/BookNow" element={<BookNow />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Blog" element={<Blog />} />

        </Routes>
        <Footer/>
      </Router>

      </div>
    
  );
}

export default App;
