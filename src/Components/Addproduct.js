import React from "react";
import "../Styles/Addproduct.css";

import { useStateValue } from "../StateProvider";
import { useState } from "react";
import { db } from "../Firebase";
import { useHistory, Link } from "react-router-dom";

function Addproduct() {
  const [{ items }, dispatch] = useStateValue();

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");

  const history = useHistory();

  const addItem = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_ITEMS",
      unit: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
    console.log("hello");
    setId("");
    setTitle("");
    setPrice("");
    setRating(0);
    setImage("");

    console.log(items);
  };

  const pushItems = () => {
    items.map((item) =>
      db.collection("items").doc(item.id).set({
        item: item,
      })
    );

    dispatch({
      type: "EMPTY_ITEMS",
    });

    history.replace("/");
  };

  return (
    <div className="Addproduct">
      <Link to="/">
        <img
          src="https://www.ammapickles.ca/uploads/b/0ab8e2b62e07a0c94ab832c3d2875187bb7dbf0dad43036bc7270178e5c6daab/Copy%20of%20Copy%20of%20Black%20and%20White%20Modern%20Framed%20Lola%20Cafe%20Logo%20(14)_1596580603.png"
          alt=""
          className="Addproduct__logo"
        />
      </Link>
      <div className="Addproduct__container">
        <form>
          <h5>Product Id</h5>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <h5>Title</h5>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h5>Price</h5>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <h5>Rating</h5>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <h5>Image</h5>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button
            className="Addproduct__submit"
            type="submit"
            onClick={addItem}
          >
            Submit
          </button>
        </form>

        <button className="Addproduct__add" onClick={pushItems}>
          ADD TO DATABASE
        </button>
      </div>
    </div>
  );
}

export default Addproduct;
