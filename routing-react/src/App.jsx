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
          <Route path="hjem" element={<Hjem />} />
          <Route path="koncepter" element={<Koncepter />} />
          <Route path="om" element={<Om />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

