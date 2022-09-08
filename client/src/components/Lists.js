import React, { useEffect } from "react";
import CRUDService from "../services/crud";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Lists = ({ currentLists, setCurrentLists }) => {
  useEffect(() => {
    setCurrentLists(JSON.parse(localStorage.getItem("user")).lists);
  }, []);

  const removeHandler = (id) => {
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
    <TransitionGroup className="lists">
      {currentLists.map((list) => (
        <CSSTransition timeout={500} key={list._id} classNames="fade">
          <div className="singleList">
            <li>{list.subject}</li>
            <i
              class="fa-solid fa-trash-can remove"
              onClick={() => {
                removeHandler(list._id);
              }}
            ></i>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Lists;
