import { useState } from "react";
import { Link } from "react-router-dom";

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
      let resJson = await res.json();
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          required
          id="name"
          name="name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={desc}
          rows={5}
          cols={33}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <div>
          {" "}
          <button type="submit">Submit Stock</button>
          <Link to="/">Back</Link>
        </div>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </>
  );
};
