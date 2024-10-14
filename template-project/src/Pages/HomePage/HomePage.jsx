import React, { useState } from "react";
import classes from "./HomePage.module.css";
import Card from '../../Components/Card/Card.jsx';
import Modal from '../../Components/Modal/Modal.jsx';

function HomePage({ items, addItem, deleteItem }) {
  const [showModal, setShowModal] = useState(false);

  return (
  <div>
    <header>
        <div className={classes.titleContainer}>
        <p className="title is-2">Current Title</p>
        </div>
        <div className={classes.buttonContainer}>
        <button className={`button`} id={classes.buttonAddItem} onClick={() => {setShowModal(true)}}>
            Add item
        </button>
        </div>
    </header>
    <div className={classes.cardsContainer}>
        {items.map((currentItem, index) => {
        return (
            <Card
            key={index}
            item={currentItem}
            deleteItem={deleteItem}
            />
        );
        })}
    </div>
    {showModal && <Modal addItem={addItem} closeModal={() => {setShowModal(false)}}/>}
  </div>
  );
}

export default HomePage;
