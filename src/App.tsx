import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/index.scss";
import Home from "./Pages/Home";
import Discover from "./Pages/Discover";
import Firefox from "./Pages/Firefox";
import Discord from "./Pages/Discord";
import Vsc from "./Pages/Vsc";
import Terminal from "./Pages/Terminal";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          {/* Discover - Route */}
          <Route path="/firefox" element={<Firefox />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/vsc" element={<Vsc />} />
          <Route path="/terminal" element={<Terminal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
