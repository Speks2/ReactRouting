import './components/Routing/Rout';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';

export function App() {
  return (
    <Router>
    <Navbar/> {/* Her indsættes vores navbar */}
      <Routes>
        <Route path="/hjem" element={<Frontpage />} />
        <Route path="/koncepter" element={<Detailspage />} />
        <Route path="*" element={<Errorpage />} />
        <Route path="/kontakt" element={<Errorpage />} />

      </Routes>
    </Router>
  );
}

