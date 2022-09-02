import React from "react";
import CRUDService from "../services/crud";

const SingleList = ({ subject, id, setCurrentLists }) => {
  const removeHandler = () => {
    CRUDService.removeSubject(id)
      .then((res) => {
        console.log("Removement succeed~~~");
        localStorage.setItem("user", JSON.stringify(res.data));
        setCurrentLists(JSON.parse(localStorage.getItem("user")).lists);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  return (
    <div className="singleList">
      <li>{subject}</li>
      <button onClick={removeHandler}>Remove</button>
    </div>
  );
};

export default SingleList;
