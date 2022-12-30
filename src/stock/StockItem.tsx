import { useState } from "react";

export const StockItem = (props) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  let handleDelete = async (id) => {
    try {
      let res = await fetch("http://localhost:3001/remove", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setIsActive(false);
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isActive && (
        <tr>
          <td>{props.info.stock_id}</td>
          <td>{props.info.name}</td>
          <td>{props.info.description}</td>
          <td>
            {" "}
            <button>Edit</button>
            <button onClick={() => handleDelete(props.info.stock_id)}>
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
};
