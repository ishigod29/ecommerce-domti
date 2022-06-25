import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillCloseCircle,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    onRemove,
    toggleCartItemQuantity,
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <div className="container">
          <button className="cart-heading" onClick={() => setShowCart(false)}>
            <AiFillCloseCircle />
          </button>
          <span className="heading">Shopping Bag</span>
          <span className="cart-num-items">({totalQuantities} products)</span>

          {cartItems.length < 1 && (
            <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h3>Your shopping bag is empty</h3>
              <Link href="/">
                <button className="btn" onClick={() => setShowCart(false)}>
                  Countinue Shopping
                </button>
              </Link>
            </div>
          )}

          <div className="product-container">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="product" key={item._id}>
                  <div className="item-desc">
                    <div className="flex">
                      <div className="cart-left">
                        <img
                          className="cart-product-image"
                          src={urlFor(item?.image[0])}
                          alt=""
                        />
                        <div>
                        <h5>{item.name}</h5>
                        <div>
                          <p className="quantity-desc">
                            <span
                              className="minus"
                              onClick={() =>
                                toggleCartItemQuantity(item._id, "dec")
                              }
                            >
                              <AiOutlineMinus />
                            </span>
                            <span className="num">{item.quantity}</span>
                            <span
                              className="plus"
                              onClick={() =>
                                toggleCartItemQuantity(item._id, "inc")
                              }
                            >
                              <AiOutlinePlus />
                            </span>
                          </p>
                        </div>
                        </div>
                      </div>
                      <div className="cart-right">
                        <h4>${item.price}</h4>
                        <button
                          className="remove-item"
                          onClick={() => onRemove(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="btn-container">
                <button className="btn" onClick={handleCheckout}>
                  Pay with Stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
