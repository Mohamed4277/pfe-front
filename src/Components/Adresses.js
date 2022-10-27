import React, { useEffect, useState } from "react";
import data from "../Data";

function Adresses() {
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
  const { name, lastName, adresses } = data;
  return (
    <>
      <div class="container">
      <div className="row text-center mb-5">
          <h4>Adresses</h4>
        </div>
        <div class="row">
          <div class="col-12">
          <button class="col-2 btn btn-primary btn-lg rounded-0 mb-3">
            Ajouter une adresse
          </button>
            {adresses.map((adress) => (
              <>
                <div class="card card-lg bg-light mb-8 rounded-0 mb-3">
                  <div class="card-body">
                    <h6 class="mb-6">
                      {adress.isInvoiceAdress
                        ? "Adresse de livraison"
                        : "Adresse"}
                    </h6>
                    <div class="text-muted">
                      <div>
                        {name} {lastName}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Adresses;
