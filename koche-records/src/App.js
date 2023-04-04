import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Releases from "./pages/Releases.jsx";
import Podcasts from "./pages/Podcasts.jsx";
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx";

import {
  KCH001,
  KCH002,
  KCH003,
  KCH004,
  KCH005,
  KCH006,
  KCH007,
  KCH008,
} from "./releases";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Releases />} />
          <Route exact path="/podcasts" element={<Podcasts />} />

          <Route exact path="/kch001" element={<KCH001 />} />
          <Route exact path="/kch002" element={<KCH002 />} />
          <Route exact path="/kch003" element={<KCH003 />} />
          <Route exact path="/kch004" element={<KCH004 />} />
          <Route exact path="/kch005" element={<KCH005 />} />
          <Route exact path="/kch006" element={<KCH006 />} />
          <Route exact path="/kch007" element={<KCH007 />} />
          <Route exact path="/kch008" element={<KCH008 />} />

          <Route exact path="/events" element={<Events />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
