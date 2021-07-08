import React, { useState } from "react";
import ReactDom from "react-dom";
import "../Styles/Modal.css";
import { db } from "../Firebase";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

function Modal({ open, onClose, id }) {
  const [title, updateTitle] = useState("");
  const [price, updatePrice] = useState("");
  const [rating, updateRating] = useState(0);
  const [image, updateImage] = useState("");

  const updateItem = (e) => {
    e.preventDefault();

    const updatedItem = {
      id: id,
      title: title,
      price: price,
      rating: rating,
      image: image,
    };
    if (id) {
      db.collection("items").doc(id).update({ item: updatedItem });
    }
  };
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLES}>
        <div className="Modal__container">
          <h2>UPDATE SELECTION</h2>
          <form>
            <h5>Title</h5>
            <input
              type="text"
              value={title}
              onChange={(e) => updateTitle(e.target.value)}
            />
            <h5>Price</h5>
            <input
              type="text"
              value={price}
              onChange={(e) => updatePrice(e.target.value)}
            />
            <h5>Rating</h5>
            <input
              type="number"
              value={rating}
              onChange={(e) => updateRating(e.target.value)}
            />
            <h5>Image</h5>
            <input
              type="text"
              value={image}
              onChange={(e) => updateImage(e.target.value)}
            />
          </form>
          <button className="Modal__submit" type="submit" onClick={updateItem}>
            UPDATE
          </button>
          <button className="Modal__close" onClick={onClose}>
            Close Modal
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
