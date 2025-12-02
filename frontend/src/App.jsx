import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import Header from './components/Header';
import Contact from './components/Contact';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
      }
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AppContent />
    </Router>
  );
}

export default App;
