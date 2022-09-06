import React, { useState } from "react";
import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="App">
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route
          path="/home"
          element={
            <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
