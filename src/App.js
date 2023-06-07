import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Navbar from "./components/Navbar";
import AllCoins from "./pages/AllCoins";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-coins" element={<AllCoins />} />
          <Route path="/coins/:coinId" element={<Coin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
