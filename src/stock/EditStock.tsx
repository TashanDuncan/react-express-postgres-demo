import { useEffect, useState } from "react";
import { Form, Link, useParams } from "react-router-dom";
import * as Styled from "./Stock.styles";

export const EditStock = () => {
  let {stockId} = useParams()
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch(`http://localhost:3001/stock/${stockId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result)
          setName(result[0].name);
          setDesc(result[0].description);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  
  let handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:3001/stock/${stockId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: desc,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
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
    <Styled.SubTitle>Stock {stockId}</Styled.SubTitle>
      <Styled.Form onSubmit={handleUpdate}>
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
          wrap={'hard'}
          placeholder="Description..."
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        </div>


        <div>
          <Styled.Button type="submit">Update Stock</Styled.Button>
          <Link to="/"><Styled.Button>Back</Styled.Button></Link>
        </div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </Styled.Form>
    </>
  );
};
