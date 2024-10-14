import React from "react";
import classes from "./AnotherPage.module.css";
import { useParams, useNavigate } from "react-router-dom";

function AnotherPage({ items }) {
  let { itemId } = useParams();
  const navigate = useNavigate();
  console.log(itemId);
  const currentItem = items.find((item) => item.id === itemId);

  const handleGoHomeBtn = () => {
    navigate("/home");
  };

  return (
    <div className={classes.detailsPageContainer}>
      <div className={classes.detailsContent}>
        <button id={classes.goHomeButton} onClick={handleGoHomeBtn}>
          {"<"} go home
        </button>
        <h1 className="title is-1" id={classes.title}>
          {currentItem.nombre}
        </h1>
        <div className={classes.dataContainer}>
          <p>
            <b>Name:</b> {currentItem.nombre}
          </p>
          <p>
            <b>Identificador:</b> {currentItem.id}
          </p>
          {/* <p><strong>Description: </strong>{currentItem.description}</p>
              <p><strong>Players: </strong>{currentItem.players}</p>
              <p><strong>Categories: </strong>{currentItem.categories}</p> */}
        </div>
      </div>
    </div>
  );
}

export default AnotherPage;
