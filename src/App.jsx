import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MenSection from "./components/MenSection";
import WomenSection from "./components/WomenSection";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import "./App.css";
import ShortSection from "./components/shortsSection";
import Saree from "./components/saree";
import Simple from "./components/Simple";
import Cookies from "js-cookie";
import Wwatch from "./components/Wwatch";
import Wkurta from "./components/Wkurta";
import Whand from "./components/Whand";
import Wfoot from "./components/Wfoot";
import Mcfoot from "./components/Mcfoot";
import Mwatches from "./components/Mwatches";
import Msfoot from "./components/Msfoot";
import Mtshirts from "./components/Mtshirts";

function App() {
  useEffect(() => {
    Cookies.remove("cart");
    Cookies.remove("history");
  }, []);
  return (
    <div className="app">
      <Header /> {/* Include the Header component */}
      <div className="main_content">
        <Sidebar />
        <Routes>
          <Route path="/men" element={<MenSection />} />
          <Route path="/women" element={<WomenSection />} />
          <Route path="/shorts" element={<ShortSection />} />
          <Route path="/wwatch" element={<Wwatch />} />
          <Route path="/wkurta" element={<Wkurta />} />
          <Route path="/whand" element={<Whand />} />
          <Route path="/wfoot" element={<Wfoot />} />
          <Route path="/mtshirts" element={<Mtshirts />} />
          <Route path="/msfoot" element={<Msfoot />} />
          <Route path="/mcfoot" element={<Mcfoot />} />
          <Route path="/mwatches" element={<Mwatches />} />
          <Route path="/wsaree" element={<Saree />} />
          <Route path="/p1/:pid" element={<Simple />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
