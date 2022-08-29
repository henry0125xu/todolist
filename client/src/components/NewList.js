import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewList = ({ currentLists, setCurrentLists }) => {
  const [subjectData, setSubjectData] = useState("");

  const subjectDataHandler = (e) => {
    setSubjectData(e.target.value);
  };

  const submitHandler = () => {
    if (0 < subjectData.length && subjectData.length <= 30) {
      setCurrentLists([...currentLists, { subjectData, listId: uuidv4() }]);
      setSubjectData("");
    } else {
      alert("The length of subject name is out of range...");
    }
  };

  const keySubmitHandler = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <div className="newList">
      <label htmlFor="subject">Subject:&nbsp;</label>
      <input
        type="text"
        id="subject"
        onChange={subjectDataHandler}
        value={subjectData}
        onKeyPress={keySubmitHandler}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default NewList;
