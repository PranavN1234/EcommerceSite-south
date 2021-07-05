import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.rickshawchallenge.com/wp-content/uploads/2016/11/Indian_Spices.jpg"
          className="home__image"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="MTR pickle"
            price="14.99"
            image="https://images-na.ssl-images-amazon.com/images/I/71njBoHkl6L._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="2"
            title="GITS Dosa Mix"
            price="7.99"
            image="https://www.ambikajapan.com/product_images/large/34003_1.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="EVEREST Idly dosa mix"
            price="6.99"
            image="https://www.luluhypermarket.com/medias/491337-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzA2MDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGU2L2g2NC9oMDAvOTMxMzM1MTYzMDg3OC5qcGd8MzZjNzUzYmUzYzcwNDhiODY4NDI3MTQyNDdjNzExNzdlMjhiNzczNTYzNDFjZWM3NmQxYTQ1ZDk0YTNhZjk5NQ"
            rating={4}
          />
          <Product
            id="4"
            title="MTR Chilly pickle"
            price="9.99"
            image="https://www.innit.com/public/products/images/00840965010146-COlQCCxnqVHA-0_s500.jpg"
            rating={2}
          />
          <Product
            id="5"
            title="Chutney Powder"
            price="5.99"
            image="https://www.luluhypermarket.com/medias/318709-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NzcyNTF8aW1hZ2UvanBlZ3xoNmQvaGJkLzk1NzU1NDU0NzEwMDYvMzE4NzA5LTAxLmpwZ18xMjAwV3gxMjAwSHxlYTY1MWQ3ODc3ZmI1YjUwZjYxNWVlMTcyYjkyZmEzNDUyNzAyZDNiZDZhZTdkMjFlZDc2ODA1MmVhZDNmM2Fm"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
