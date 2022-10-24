import React, { useEffect, useState } from "react";
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
  console.log("........: ", paymentMode);
  return (
    <>
      <div class="col-12 col-md-9 col-lg-8 offset-lg-1">
        <div class="row">
          <div class="col-12 col-lg-6">
            {paymentMode.map((card) => (
              <>
                <div class="card card-lg bg-light mb-8">
                  <div class="card-body ">
                    <h6 class="mb-6">{card.name}</h6>
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
          <button class="col-12 btn btn-secondary btn-lg ms-3 me-3">
            Ajouter une carte
          </button>
        </div>
      </div>
    </>
  );
}

export default PaymentMode;
