import React, { useState } from "react";
import NewList from "../components/NewList";
import Lists from "../components/Lists";

const Home = () => {
  const [currentLists, setCurrentLists] = useState([]);

  return (
    <div className="home">
      <NewList currentLists={currentLists} setCurrentLists={setCurrentLists} />
      <Lists currentLists={currentLists} setCurrentLists={setCurrentLists} />
    </div>
  );
};

export default Home;
