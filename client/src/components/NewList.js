import React, { useState } from "react";
import CRUDService from "../services/crud";

const NewList = ({ setCurrentLists }) => {
  const [subjectData, setSubjectData] = useState("");

  const subjectDataHandler = (e) => {
    setSubjectData(e.target.value);
  };

  const submitHandler = () => {
    if (0 < subjectData.length && subjectData.length <= 30) {
      CRUDService.addSubject(subjectData)
        .then((res) => {
          console.log("Addition succeed~~~");
          localStorage.setItem("user", JSON.stringify(res.data));
          setCurrentLists(JSON.parse(localStorage.getItem("user")).lists);
          setSubjectData("");
        })
        .catch((err) => {
          alert(err.response.data);
        });
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
      <button onClick={submitHandler}>Add</button>
    </div>
  );
};

export default NewList;
