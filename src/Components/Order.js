import React, { useEffect, useState } from "react";
import data from "../Data";

function Order() {
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
  const { paymentMode } = paymentMode;
  return (
    <>
      <div class="col-12 col-md-9 col-lg-8 offset-lg-1">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div>ORDERS</div>
          </div>
          <button class="col-12 btn btn-secondary btn-lg ms-3 me-3">
            Ajouter une carte
          </button>
        </div>
      </div>
    </>
  );
}

export default Order;
