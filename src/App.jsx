import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Love from "../pages/Love";
import Selfcare from "../pages/Selfcare";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/selfcare" element={<Selfcare />} />
        <Route path="/love" element={<Love />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
