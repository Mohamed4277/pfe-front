import React, { useEffect, useState } from "react";
import data from "../Data";
import Card from "../Components/Card"

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
  return (
    <>
      <div className="container">
      <div className="row text-center mb-5">
          <h4>Commandes</h4>
        </div>
        <div className="row rounded-0">
          <div className="col-12 rounded-0">
          <div class="accordion border-0 rounded-0" id="accordionPanelsStayOpenExample">         
            {order.map(ord =>
              <>              
 <div class="accordion accordion-flush" id="accordionFlushExample" onClick={()=>setIsExpand(!isExpand)}>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class={isExpand?"accordion-button":"accordion-button collapsed"} type="button" 
       data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded={isExpand?true:"false"} aria-controls="flush-collapseOne">
        #Order {ord.id}
      </button>
    </h2>
    <div id="flush-collapseOne" class={isExpand?"accordion-collapse collapse show":"accordion-collapse collapse"} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
	  
	                     {ord.product.map(book=>
                      <>
                      
                      <Card product={book}/>
                      
                      </>
                      )} 
	  
	  
	  </div>
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
