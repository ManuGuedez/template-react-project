import React from "react";
import classes from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card({ item, deleteItem }) {
  const navigate = useNavigate();

  const handleDeletBtn = () => {
    deleteItem(item);
  };

  const handleAnotherPageBtn = () => {
    navigate(`/anotherPage/${item.id}`);
  };

  return (
    <div className={classes.cardContainer}>
      <h4 className="title is-4" id={classes.title}>
        {item.nombre}
      </h4>
      <button className="button" id={classes.button} onClick={handleAnotherPageBtn}>
        optional button
      </button>
      <button className="button" id={classes.button} onClick={handleDeletBtn}>
        delete
      </button>
    </div>
  );
}

export default Card;
