import React, { useEffect, useState } from "react";
import data from "../Data";

function Order() {
  const [myOrders, setMyOrders] = useState({});
  const [isExpand, setIsExpand] = useState(false);
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
        setMyOrders(json[0]);
        console.log("", json[0]);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const {order}=data;
  console.log('111111111: ', order)
  return (
    <>
      <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
        <div className="row">
          <div className="col-12">
          <div class="accordion border-0 rounded-0" id="accordionPanelsStayOpenExample">         
            {order.map(ord =>
              <>              
              <div class="accordion-item border-0 rounded-0 mb-3 bg-light" onClick={()=> setIsExpand(!isExpand)}>
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse" 
                  data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    #Order {ord.id}
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class={isExpand?"accordion-collapse collapse show":"accordion-collapse collapse"} aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    {ord.product.map(book=>
                      <>
                      
                      
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
                      <h5 class="card-title">{book.name}</h5>
                      <p class="card-text">
                        <p>{book.price} €</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                      
                      
                      </>
                      )} 
                  </div>
                </div>
              </div>
             </>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }
export default Order;
