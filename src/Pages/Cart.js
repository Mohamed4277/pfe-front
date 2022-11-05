
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "../Components/Card"

function Cart() {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(cart);

  const total =
    cart &&
    cart.length > 0 &&
    cart.reduce((acc, currentvalue) => {
      return acc + currentvalue.price * currentvalue.quantity;
    }, 0);

  return (
    <>          <div className="container">
                      <div className="row mb-5">
                <div className="col align-self-center total-purchase purchase">
                  Total des achats: {total} €
                </div>
                <div className="col align-self-center button-order purchase text-end">
                  <button
                    type="button"
                    className="btn btn-success btn-lg button-margin rounded-0"
                    onClick={() => {
                      navigate("/ordered");
                      localStorage.removeItem("persist:root");
                      dispatch({
                        type: "UPDATE_QUANTITY_ITEM",
                        payload: {
                          quantity: 0,
                        },
                      });
                    }}
                  >
                    Passer la commande
                  </button>
                </div>
              </div>
    </div>
  
      {cart &&
        cart.length > 0 &&
        cart.map((product) => {
          return (


            <Card product={product} 
              
              removeItem={() =>
                dispatch({
                  type: "REMOVE_ITEM_FROM_CART",
                  payload: product,
                })}
              updateItem={(event) =>
                dispatch({
                  type: "UPDATE_QUANTITY_ITEM",
                  payload: {
                    ...product,
                    quantity: event.target.value,
                  },
                })}
              
              
              />




          );
        })}
    </>
  );
}

export default Cart;
