import './components/Routing/Hjem';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import {Hjem} from './components/Routing/Hjem';
import {Koncepter} from './components/Routing/Koncepter';
import {Kontakt} from './components/Routing/Kontakt';
import {Layout} from './components/Routing/Layout';
import {NoPage} from "./components/Routing/NoPage";
import {Om} from './components/Routing/Om';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hjem />} />
          <Route path="/Koncepter" element={<Koncepter />} />
          <Route path="/Om" element={<Om />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

