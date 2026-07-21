import React from "react";
import "./App.css";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Support from "./pages/Support";
import Auth from "./pages/Auth";
import FilterProducts from "./components/FilterProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/products/:category" element={<FilterProducts />} />
          <Route path="/products" element={<FilterProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
