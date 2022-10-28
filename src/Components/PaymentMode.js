import React, { useEffect, useState } from "react";
import { Pen, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import data from "../Data";

function PaymentMode() {
  const [myAdresses, setMyAdresses] = useState({});
  useEffect(() => {
    const url = "http://localhost:8080/api/users";
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
        setMyAdresses(json[0]);
        console.log("", json[0]);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const { paymentMode } = data;
  return (
    <>
      <div class="container">
        <div className="row text-center mb-5">
          <h4>Mode de payements</h4>
        </div>
        <div class="row">
          <div class="col-12">
          <Link to={"/payment-mode-form"}>          
            <button class="col-2 btn btn-primary btn-lg rounded-0 mb-3">
              Ajouter une carte
            </button>
          </Link>
            {paymentMode.map((card) => (
              <>
                <div class="card card-lg bg-light mb-8 rounded-0 mb-3">
                  <div class="card-body ">
                  <div className="row">
                        <div className="col-6">                    
                          <h6 class="mb-6">
                          {card.name}
                          </h6>
                        </div>
                      <div className="col-6 text-end">                
                      <button className="btn btn-lg  button-margin" >
                      <Link to={"/payment-mode-form/"+ card.id}><Pen size={20} /></Link>
                      </button>
                      <button className="btn btn-lg  button-margin">
                        <Trash size={20} />
                      </button>
                      </div>
                   </div>
                    <div class="text-muted">
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
      </div>
    </>
  );
}

export default PaymentMode;
