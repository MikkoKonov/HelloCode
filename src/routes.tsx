import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Golang from './pages/Golang';

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Golang" element={<Golang />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
