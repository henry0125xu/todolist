import React from "react";
import CRUDService from "../services/crud";

const SingleList = ({ subject, id, setCurrentLists }) => {
  const removeHandler = (e) => {
    // const removedList = e.target.parentElement;
    // // removedList.addEventListener("animationend", () => {});
    // removedList.style.animation = "disappear 0.7s forwards";
    CRUDService.removeSubject(id)
      .then((res) => {
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
      <i class="fa-solid fa-trash-can remove" onClick={removeHandler}></i>
    </div>
  );
};

export default SingleList;
