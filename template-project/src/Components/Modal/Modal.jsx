import React, { useState } from "react";
import classes from "./Modal.module.css";

function Modal({ addItem, closeModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [players, setPlayers] = useState("");
  const [categories, setCategories] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    // if (
    //   (title.trim() === "" && description.trim() === "") ||
    //   players === "" ||
    //   categories === ""
    // ) {
    //   window.alert("Falta completar datos!!");
    // } else {
    //   console.log(title, description, players, categories);
    //   addItem(title, description, players, categories);
    //   closeModal();
    // }
    addItem(title, description, players, categories);
    closeModal();
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <p className="title is-4">New item</p>
        <form onSubmit={handleSubmit} className={classes.modalContainer}>
          <div className={classes.field}>
            <label className="label">Label 1</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.field}>
            <label className="label">Label 2</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.field}>
            <label className="label">Label 3</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={players}
                required
                onChange={(e) => setPlayers(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.field}>
            <label className="label">Label 4</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={categories}
                required
                onChange={(e) => setCategories(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <button
              type="button"
              className="button is-danger"
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button type="submit" className="button is-primary">
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
