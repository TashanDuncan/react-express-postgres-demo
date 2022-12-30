import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StockItem } from "./StockItem";
import styled from "styled-components";

interface Stock {
  stock_id: string;
  name: string;
  description: string;
}

const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  margin: 20px 0;
  thead {
    border: 2px solid white;
  }
  th,
  td {
    padding: 10px;
  }
`;

const StyledLink = styled(Link)`
  background-color: white;
  padding: 10px;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: grey;
  }
`;

export const DisplayStock = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<Stock[]>([]);
  const [error, setError] = useState<any>();

  useEffect(() => {
    fetch("http://localhost:3001/stock")
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
      <>
        <StyledTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <StockItem key={item.stock_id} info={item} />
            ))}
          </tbody>
        </StyledTable>
        <StyledLink to="/add">Add Stock</StyledLink>
      </>
    );
  }
};
