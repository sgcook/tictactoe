import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Play from "./Play";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route exact path="/play" element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;
