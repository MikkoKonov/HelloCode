import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Golang from './pages/Golang';
import JavaScript from './pages/JavaScript';
import Kotlin from './pages/Kotlin';

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Golang" element={<Golang />} />
        <Route path="/JavaScript" element={<JavaScript />} />
        <Route path="/Kotlin" element={<Kotlin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
