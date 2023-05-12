import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Project from '../Pages/Project/Project';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import Footer from '../Components/Footer/Footer';
import Interconnectivity from '../Pages/Interconnectivity/Interconnectivity';

const AppRouter = () => {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/interconnectivity" element={<Interconnectivity />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
  
  export default AppRouter;