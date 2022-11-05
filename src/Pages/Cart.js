import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "../Components/Card";

function Cart() {
  const { cart, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  useEffect(() => {
    const url = "http://localhost:8080/api/order/user/" + 9;
    const token = localStorage.getItem("access_token");
    try {
      isOrdered &&
        fetch(url, {
          method: "POST",
          headers: {
            "content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            user: {
              id: 9,
            },
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((res) => {
            cart.map((product) => {
              fetch("http://localhost:8080/api/productOrder", {
                method: "POST",
                headers: {
                  "content-Type": "application/json",
                  Authorization: "Bearer " + token,
                },
                body: JSON.stringify({
                  id: {
                    orderId: res,
                    productId: product.id,
                  },
                  order: {
                    id: res,
                    testOrder: null,
                  },
                  product: product,
                  quantity: product.quantity,
                }),
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  console.log("kkkkk", res);
                  console.log("*****", cart);
                });
            });
          });
    } catch (error) {
      console.log("error", error);
    }
  }, [isOrdered]);

  console.log(cart);

  const total =
    cart &&
    cart.length > 0 &&
    cart.reduce((acc, currentvalue) => {
      return acc + currentvalue.price * currentvalue.quantity;
    }, 0);

  return (
    <>
      <div className="row mb-5">
        <div className="col align-self-center total-purchase purchase">
          Total des achats: {total} €
        </div>
        <div className="col align-self-center button-order purchase text-end">
          <button
            type="button"
            className="btn btn-success btn-lg button-margin"
            onClick={() => {
              setIsOrdered(true);
            }}
          >
            Passer la commande
          </button>
        </div>
      </div>
      {cart &&
        cart.length > 0 &&
        cart.map((product) => {
          return (
            <Card
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
    </>
  );
}

export default Cart;
