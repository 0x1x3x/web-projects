import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Releases from "./pages/Releases.jsx";
import Podcasts from "./pages/Podcasts.jsx";

import KCH001 from "./releases/KCH001.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/podcasts" element={<Podcasts />} />
        <Route exact path="/" element={<Releases />} />
        <Route exact path="/kch001" element={<KCH001 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
