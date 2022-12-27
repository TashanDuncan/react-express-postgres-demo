import e from 'express';
import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Stock {
    stock_id: string;
    name: string;
    description: string;
}

export const DisplayStock = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<Stock[]>([]);
  const [error, setError] = useState<any>();
  const [isItemDeleted, setIsItemDeleted] = useState<boolean>(false)

  let handleDelete = async (id) => {
    try {
      let res = await fetch("http://localhost:3001/remove", {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setIsItemDeleted(true);
      } else {
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch('http://localhost:3001/stock')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setIsItemDeleted(false)
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setIsItemDeleted(false)
          setError(error);
        }
      );
  }, [isItemDeleted]);


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.stock_id}>
            {item.name} {item.description}<button onClick={(e:any) => handleDelete(item.stock_id)}>DELETE</button>
          </li>
        ))}
         <Link to="/add">Add Stock</Link>
      </ul>
    );
  }
};
