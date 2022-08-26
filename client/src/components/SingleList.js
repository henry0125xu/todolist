import React from "react";

const SingleList = ({ subjectData, listId, currentLists, setCurrentLists }) => {
  const removeHandler = () => {
    setCurrentLists(currentLists.filter((list) => list.listId !== listId));
  };

  return (
    <div className="singleList">
      <li>{subjectData}</li>
      <button>Finished</button>
      <button onClick={removeHandler}>Remove</button>
    </div>
  );
};

export default SingleList;
