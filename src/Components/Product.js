import React, { useState } from "react";

import "../Styles/Product.css";
import { useStateValue } from "../StateProvider";
import { db } from "../Firebase";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";

function Product({ id, title, image, price, rating }) {
  const [modalState, setModalState] = useState(false);
  rating = parseInt(rating);
  if (rating > 5) {
    rating = 5;
  }

  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  let admin = false;
  if (user?.email === "reminho@gmail.com") {
    admin = true;
  }

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const removeFromDatabase = () => {
    db.collection("items")
      .doc(id)
      .delete()
      .then(() => {
        // window.location.reload();
        console.log("Deleted Item");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const updateDatabase = () => {
    setModalState(true);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <Modal open={modalState} onClose={() => setModalState(false)} id={id}>
        Modal
      </Modal>
      {!admin && (
        <Button
          className="button__Add"
          variant="outlined"
          onClick={addToBasket}
        >
          Add to basket
        </Button>
      )}
      {admin && <button onClick={removeFromDatabase}>Remove</button>}
      {admin && <button onClick={updateDatabase}>Update</button>}
    </div>
  );
}

export default Product;
