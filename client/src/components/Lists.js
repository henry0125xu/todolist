import React from "react";
import SingleList from "./SingleList";

const Lists = ({ currentLists, setCurrentLists }) => {
  return (
    <div className="lists">
      <ul>
        {currentLists.map((list) => {
          return (
            <SingleList
              subjectData={list.subjectData}
              listId={list.listId}
              currentLists={currentLists}
              setCurrentLists={setCurrentLists}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Lists;
