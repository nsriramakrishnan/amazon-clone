import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="223123"
            title="Product 1"
            price={239.99}
            image="https://miro.medium.com/max/1688/1*7Hz3nUAXjcrgTzZzlKZinQ.jpeg"
            rating={3}
          />
          <Product
            id="567665"
            title="Samsung LC49RG Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swgge7XAL._AC_SX466_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="933245"
            title="Amazon Echo"
            price={29.99}
            image="https://miro.medium.com/max/1688/1*7Hz3nUAXjcrgTzZzlKZinQ.jpeg"
            rating={5}
          />
          <Product
            id="826495"
            title="Kindle Paperweight"
            price={229.99}
            image="https://miro.medium.com/max/1688/1*7Hz3nUAXjcrgTzZzlKZinQ.jpeg"
            rating={2}
          />
          <Product
            id="735932"
            title="Apple iPhone"
            price={999.99}
            image="https://miro.medium.com/max/1688/1*7Hz3nUAXjcrgTzZzlKZinQ.jpeg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="735938"
            title="Apple Macbook Pro"
            price={2399.99}
            image="https://miro.medium.com/max/1688/1*7Hz3nUAXjcrgTzZzlKZinQ.jpeg"
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
