import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import ComoPrepararlo from './pages/ComoPrepararlo';
import Nosotros from './pages/Nosotros';
import RecetasGuías from './pages/RecetasGuias';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/como-prepararlo" element={<ComoPrepararlo />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/recetas-guias" element={<RecetasGuías />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
