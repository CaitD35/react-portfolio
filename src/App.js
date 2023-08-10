import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
   <Route path="/" element={<AboutMe />} />
   <Route path="/portfolio" element={<Portfolio />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/resume" element={<Resume />} />
</Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;