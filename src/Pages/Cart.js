import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";

function Cart() {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  const total =
    cart &&
    cart.length > 0 &&
    cart.reduce((acc, currentvalue) => {
      return acc + currentvalue.price * currentvalue.quantity;
    }, 0);

  return (
    <div className="container">
      {cart.length > 0 && <div className="order-pay row mb-5">
        <h5 className="col align-self-center total-purchase purchase">
          Total des achats: {total} €
        </h5>
        <div className="col align-self-center button-order purchase text-end">
          <button
            type="button"
            id="order"
            className="btn btn-dark btn-lg button-margin rounded-0"
            onClick={() => {
              navigate("/payment-validate")
            }}
          >
            Passer la commande
          </button>
        </div>
      </div>}
      <div className="row">      
      {cart &&
        cart.length > 0 &&
        cart.map((product) => {
          return (
            <Card cart={cart}
              product={product}
              removeItem={() =>
                dispatch({
                  type: "REMOVE_ITEM_FROM_CART",
                  payload: product,
                })
              }
              updateItem={(event) =>
                dispatch({
                  type: "UPDATE_QUANTITY_ITEM",
                  payload: {
                    ...product,
                    quantity: event.target.value,
                  },
                })
              }
            />
          );
        })}
        </div>

    </div>
  );
}

export default Cart;
