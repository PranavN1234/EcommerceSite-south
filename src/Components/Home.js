import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { db } from "../Firebase";
import "../Styles/Home.css";
import Product from "./Product";
import { useStateValue } from "../StateProvider";

function Home({ searchItem }) {
  const [homeSearch, setHomeSearch] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    db.collection("items")
      .get()
      .then((querySnapshot) => {
        setItems(querySnapshot.docs.map((doc) => doc.data()));
      });
  }, [items]);

  useMemo(() => {
    setHomeSearch(searchItem);
  }, [searchItem]);

  const searchedItems = items.filter((val) => {
    if (homeSearch == "") {
      return val;
    } else if (
      val.item.title.toLowerCase().includes(homeSearch.toLowerCase())
    ) {
      return val;
    }
  });

  const data = (items) =>
    Array(Math.ceil(items.length / 3))
      .fill()
      .map((_, index) => index * 3)
      .map((begin) => items.slice(begin, begin + 3));

  const final_display = data(searchedItems);

  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.rickshawchallenge.com/wp-content/uploads/2016/11/Indian_Spices.jpg"
          className="home__image"
          alt=""
        />

        {final_display.map((elements) => (
          <div className="home__row">
            {elements.map((element) => (
              <Product
                id={element.item.id}
                title={element.item.title}
                price={element.item.price}
                image={element.item.image}
                rating={element.item.rating}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
