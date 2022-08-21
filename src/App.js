import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./comp/Login";
import Home from "./comp/Home";
import Register from "./comp/Register";
function App() {
  return (
  <div>
<Router>
  <Routes>
  <Route path ="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  </Routes>
  
</Router>
  </div>);
}

export default App;
