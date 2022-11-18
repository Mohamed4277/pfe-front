import React, { useEffect,useState } from "react";
import { Pen } from "react-bootstrap-icons";
import { useDispatch,useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


function PaymentValidate() {

  const dispatch=useDispatch();
  const [isOrdered, setIsOrdered] = useState(false);
  const {adress}=useSelector((state)=>state);
  const {paymentMode}=useSelector((state)=>state);
  const {cart}=useSelector((state)=>state);
  const navigate = useNavigate();
  const {user}= JSON.parse(localStorage.getItem("persist:root"));
  const userId=JSON.parse(user).id;

  useEffect(() => {
    const url = "http://localhost:8080/api/user/user-by-id/" + userId;
    const token = localStorage.getItem("access_token");
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
        });
        const json = await response.json();
        dispatch({type:"GET_ADRESSES", payload:json.adresses})
        dispatch({type:"GET_PAYMENT_MODE", payload:json.paymentMode})
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const url = "http://localhost:8080/api/order/user/" + userId;
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
              id: userId,
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
                  dispatch({type:"REMOVE_CART"})
                  navigate("/ordered")
                  //return response.json();
                })
                .then((res) => {
                });
            });
          });
    } catch (error) {
      console.log("error", error);
    }
  }, [isOrdered]);

  const total =
    cart &&
    cart.length > 0 &&
    cart.reduce((acc, currentvalue) => {
      return acc + currentvalue.price * currentvalue.quantity;
    }, 0);
  
    return (
        <>
          <div className="container">
          <div className="row mb-5">
          <div className="col-12">
          {cart.length > 0 && <div className="order-pay row mb-5">
        <h5 className="col align-self-center total-purchase purchase">
          Total des achats: {total} €
        </h5>
        <div className="col align-self-center button-order purchase text-end">
          <button
            type="button"
            id="validate"
            className="btn btn-dark btn-lg button-margin rounded-0"
            onClick={() => {
              setIsOrdered(true)
            }}
          >
            Valider et payer la commande
          </button>
        </div>
      </div>}  
          </div>
          </div>
            <div className="row">
              <div className="col-12">
                {adress && adress.map((adress) => ( adress.isInvoiceAdress === true || 
                 adress.isDeliveryAdress === true &&
                  <>
                    <div className="card card-lg bg-light mb-8 rounded-0 mb-3">
                      <div className="card-body">
                        <div className="row">
                            <div className="col-6">                    
                              <h6 className="mb-6">
                              {adress.isInvoiceAdress
                                ? "Adresse de livraison"
                                : "Adresse"}
                              </h6>
                            </div>
                          <div className="col-6 text-end">                
                          <button className="btn btn-lg  button-margin" >
                          <Link className="text-decoration-none" to={"/adress/"+ adress.id}><Pen size={20} /></Link>
                          </button>
                       </div>
                      </div>
                        <div className="text-muted">
                          <div>
                            {adress.nameAdress} {adress.lastNameAdress}
                          </div>
                          <div>{adress.adressPartOne}</div>
                          <div>{adress.adressPartTwo}</div>
                          <div>
                            {adress.zip} {adress.city}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
                {
                          <div className="row">
                          <div className="col-12">
                            {paymentMode && paymentMode.map((card) => ( card.isCreditCardToUse &&
                              <>
                                <div className="card card-lg bg-light mb-8 rounded-0 mb-3">
                                  <div className="card-body ">
                                  <div className="row">
                                        <div className="col-6">                    
                                          <h6 className="mb-6">
                                          {card.name}
                                          </h6>
                                        </div>
                                      <div className="col-6 text-end">                
                                      <button className="btn btn-lg  button-margin" >
                                      <Link to={"/payment-mode-form/"+ card.id}><Pen size={20} /></Link>
                                      </button>
                                      </div>
                                   </div>
                                    <div className="text-muted">
                                      <div>{card.cardType}</div>
                                      <div>{card.cardNumber}</div>
                                      <div>{card.codeSecret}</div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                }
              </div>
            </div>
          </div>
        </>
      );
  }

export default PaymentValidate;