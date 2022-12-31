import { useState } from "react";
import { Link } from "react-router-dom";
import * as Styled from "./Stock.styles";

export const AddStock = () => {
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: desc,
        }),
      });
      if (res.status === 200) {
        setName("");
        setDesc("");
        setMessage("Stock Added successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Styled.SubTitle>Add New Stock</Styled.SubTitle>
      <Styled.Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            required
            id="name"
            name="name"
            value={name}
            type="text"
            placeholder="Name..."
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={desc}
            rows={2}
            cols={33}
            placeholder="Description..."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <div>
          <Styled.Button type="submit">Submit Stock</Styled.Button>
          <Link to="/">
            <Styled.Button>Back</Styled.Button>
          </Link>
        </div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </Styled.Form>
    </>
  );
};
