import { useState } from "react";
import { Link } from "react-router-dom";

export const StockItem = (props) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const description = props.info.description.length > 25 ? `${props.info.description.substring(0,25)}...` : props.info.description

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
          <td>{description}</td>
          <td>
            <Link to={`/edit/${props.info.stock_id}`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(props.info.stock_id)}>
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
};
