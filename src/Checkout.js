import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://m.media-amazon.com/images/G/31/img19/AmazonPay/LPA/Dashboard/Prime_Pay_PC_Dashboard_770x150._CB405042353_.jpg"
            alt="test"
          />
        </Link>
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
