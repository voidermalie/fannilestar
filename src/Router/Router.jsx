import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import Project from '../Pages/ProjectPopUp/ProjectPopUp';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import Footer from '../Components/Footer/Footer';
import Interconnectivity from '../Pages/Interconnectivity/Interconnectivity';

const AppRouter = () => {
    return (
      <Router basename="/fannilestar">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/interconnectivity" element={<Interconnectivity />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
  
  export default AppRouter;