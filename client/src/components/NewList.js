import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewList = ({ currentLists, setCurrentLists }) => {
  const [subjectData, setSubjectData] = useState("");

  const subjectDataHandler = (e) => {
    setSubjectData(e.target.value);
  };

  const submitHandler = () => {
    setCurrentLists([...currentLists, { subjectData, listId: uuidv4() }]);
    setSubjectData("");
  };

  return (
    <div className="newList">
      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        onChange={subjectDataHandler}
        value={subjectData}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default NewList;
