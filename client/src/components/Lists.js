import React, { useEffect } from "react";
import SingleList from "./SingleList";

const Lists = ({ currentLists, setCurrentLists }) => {
  useEffect(() => {
    setCurrentLists(JSON.parse(localStorage.getItem("user")).lists);
  }, []);

  return (
    <div className="lists">
      <ul>
        {currentLists.map((list) => {
          return (
            <SingleList
              subject={list.subject}
              id={list._id}
              setCurrentLists={setCurrentLists}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Lists;
