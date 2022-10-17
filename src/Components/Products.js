import axios from "axios";
import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "api/product";
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
        setProducts(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {products &&
        products.length > 0 &&
        products.map((product) => {
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
                      <p class="card-text">{product.description}</p>
                      <p class="card-text">
                        <p>{product.price} €</p>
                        <button
                          type="button"
                          class="btn btn-lg btn-primary"
                          disabled
                        >
                          Aouter au panier
                        </button>
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

export default Products;
