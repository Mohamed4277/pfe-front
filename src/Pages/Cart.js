
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

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
    <>
      {cart &&
        cart.length > 0 &&
        cart.map((product) => {
          return (
            <div className="container">
              <div className="row mb-5">
                <div className="col align-self-center total-purchase purchase">
                  Total des achats: {total} €
                </div>
                <div className="col align-self-center button-order purchase text-end">
                  <button
                    type="button"
                    className="btn btn-success btn-lg button-margin"
                    onClick={() => {
                      navigate("/ordered");
                      localStorage.removeItem("persist:root");
                      dispatch({
                        type: "UPDATE_QUANTITY_ITEM",
                        payload: {
                          ...product,
                          quantity: 0,
                        },
                      });
                    }}
                  >
                    Passer la commande
                  </button>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="https://servimg.eyrolles.com/static/media/0188/9782416000188_internet_b200x200.jpg"
                      width={190}
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{product.name}</h5>
                      <p class="card-text">{product.description}</p>
                      <p class="card-text">
                        <div className="row">
                          <div className="col-4">
                            <button
                              type="button"
                              className="btn btn btn-danger btn-lg button-margin"
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_ITEM_FROM_CART",
                                  payload: product,
                                })
                              }
                            >
                              Supprimer du panier
                            </button>
                          </div>
                          <div className="col-2 nb-of-product">
                            <input
                              className="form-control"
                              id="nbOfProduct"
                              name="nbOfProduct"
                              onChange={(event) =>
                                dispatch({
                                  type: "UPDATE_QUANTITY_ITEM",
                                  payload: {
                                    ...product,
                                    quantity: event.target.value,
                                  },
                                })
                              }
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Cart;
