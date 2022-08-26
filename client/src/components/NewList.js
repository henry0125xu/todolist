import React, { useState } from "react";
import SingleList from "./SingleList";

const NewList = ({ currentLists, setCurrentLists }) => {
  const [subjectData, setSubjectData] = useState("");

  const subjectDataHandler = (e) => {
    setSubjectData(e.target.value);
  };

  const submitHandler = (e) => {
    const newListObj = <SingleList subjectData={subjectData} />;
    setCurrentLists([...currentLists, newListObj]);
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
