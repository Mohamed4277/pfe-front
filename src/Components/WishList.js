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
  const { whishList } = data;
  return (
    <>
      <div class="col-12 col-md-9 col-lg-8 offset-lg-1">
        {whishList &&
          whishList.length > 0 &&
          whishList.map((product) => {
            return (
              <div className="container">
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
                        <p class="card-text">
                          <p>{product.price} €</p>
                        </p>
                      </div>
                      <button type="button" class="btn btn-lg btn-primary">
                        Aouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Adresses;
