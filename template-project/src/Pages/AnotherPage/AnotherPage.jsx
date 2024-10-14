import React, {useState, useEffect} from "react";
import classes from "./AnotherPage.module.css";
import { useParams, useNavigate } from "react-router-dom";

function AnotherPage() {
  let { itemId } = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState([]);
  const url = "http://localhost:3000/items";


  async function fetchDataAW() {
    try {
      const response = await fetch(url + `/${itemId}`, { method: "GET" });
      const data = await response.json(); // extract JSON from response
      return data;
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    const itemPromise = fetchDataAW();
    itemPromise.then((item) => {
      setCurrentItem(item);
    })
  }, []);


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
