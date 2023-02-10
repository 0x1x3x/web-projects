import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Releases from "./pages/Releases.jsx";
import Podcasts from "./pages/Podcasts.jsx";
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx";

import KCH001 from "./releases/KCH001.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Releases />} />
        <Route exact path="/podcasts" element={<Podcasts />} />
        <Route exact path="/kch001" element={<KCH001 />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
