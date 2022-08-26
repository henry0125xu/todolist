import React, { useState } from "react";
import "./styles/style.css";
import Nav from "./components/Nav";
import NewList from "./components/NewList";
import Lists from "./components/Lists";
import Footer from "./components/Footer";

function App() {
  const [currentLists, setCurrentLists] = useState([]);

  return (
    <div className="App">
      <Nav />
      <NewList currentLists={currentLists} setCurrentLists={setCurrentLists} />
      <Lists currentLists={currentLists} setCurrentLists={setCurrentLists} />
      <Footer />
    </div>
  );
}

export default App;
