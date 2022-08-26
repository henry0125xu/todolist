import React from "react";

const SingleList = ({ subjectData }) => {
  return (
    <div className="singleList">
      <li>{subjectData}</li>
      <button>Finished</button>
      <button>Remove</button>
    </div>
  );
};

export default SingleList;
