import './components/Routing/Hjem';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import {Hjem} from './components/Routing/Hjem';
import {Koncepter} from './components/Routing/Koncepter';
import {Kontakt} from './components/Routing/Kontakt';
import {Om} from './components/Routing/Om';

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

