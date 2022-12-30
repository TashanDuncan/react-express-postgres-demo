import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StockItem } from './StockItem';

interface Stock {
    stock_id: string;
    name: string;
    description: string;
}

export const DisplayStock = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<Stock[]>([]);
  const [error, setError] = useState<any>();


  useEffect(() => {
    fetch('http://localhost:3001/stock')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
<StockItem key={item.stock_id} info={item}/>
        ))}
         <Link to="/add">Add Stock</Link>
      </ul>
    );
  }
};
