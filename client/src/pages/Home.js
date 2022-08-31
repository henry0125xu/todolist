import React, { useState, useEffect } from "react";
import Prompt from "../components/Prompt";
import NewList from "../components/NewList";
import Lists from "../components/Lists";
import AuthService from "../services/auth";

const Home = ({ currentUser, setCurrentUser }) => {
  const [currentLists, setCurrentLists] = useState([]);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  if (currentUser) {
    return (
      <div className="home">
        <NewList
          currentLists={currentLists}
          setCurrentLists={setCurrentLists}
        />
        <Lists currentLists={currentLists} setCurrentLists={setCurrentLists} />
      </div>
    );
  } else {
    return (
      <div className="home">
        <Prompt />
      </div>
    );
  }
};

export default Home;
