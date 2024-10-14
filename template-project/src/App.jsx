import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AnotherPage from './Pages/AnotherPage/AnotherPage';

function App() {
  const url = "http://localhost:3000/items";
  const [items, setItems] = useState([]);

  async function fetchDataAW() {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json(); // extract JSON from response
      return data;
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  async function postItemAW( item ) {
    try {
      const response = await fetch(url, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( item ),
      });

      const newItemWithId = await response.json();
      return newItemWithId; 
    } catch (error) {
      console.log("Error posting data: ", error);
    }
  }

  async function deleteItemAW( item ) {
    try {
      await fetch(url + `/${ item.id }`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  }
  
  useEffect(() => {
    let itemsPromise = fetchDataAW();

    itemsPromise.then((data) => {
      setItems([...data]);
    });
  }, []);

  const addItemHandler = async (title, description, players, categories) => {
    const newItem = {
      title: title,
      description: description,
      players: players,
      categories: categories,
    };
     const newItemWithId = await postItemAW(newItem);
     setItems([...items, newItemWithId]);
  };

  const deleteItemHandler = (item) => {

    // manejo a promesa para poder eliminar de la ui solo si se eliminó de la db
    deleteItemAW( item ).then(() => {
      setItems([
      ...items.filter((currentItem) => currentItem.id !== item.id),
    ])});
  };

  return (
    <Routes>
      <Route path="/*" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<HomePage items={items} addItem={addItemHandler} deleteItem={deleteItemHandler}/>} />
      <Route path="/anotherPage/:itemId" element={<AnotherPage items={items}/>} />
    
    </Routes>
  )
}

export default App
