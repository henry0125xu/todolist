import React from "react";

const Lists = ({ currentLists }) => {
  return (
    <div className="lists">
      <ul>{currentLists.map((item) => item)}</ul>
    </div>
  );
};

export default Lists;
