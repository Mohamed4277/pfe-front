import React, { useEffect, useState } from "react";
import data from "../Data";
import Card from "../Components/Card"

/*const json_2=[
  [
      {
          "id": {
              "orderId": 1,
              "productId": 1
          },
          "order": {
              "id": 1
          },
          "product": {
              "id": 1,
              "name": "ddd",
              "description": "ddd",
              "autor": "ddd",
              "edition": "ddd",
              "date": null,
              "price": 15.0,
              "image": "dddd"
          },
          "quantity": 1
      },
      {
          "id": {
              "orderId": 1,
              "productId": 2
          },
          "order": {
              "id": 1
          },
          "product": {
              "id": 2,
              "name": "fff",
              "description": "fff",
              "autor": "fff",
              "edition": "fff",
              "date": null,
              "price": 10.0,
              "image": "fff"
          },
          "quantity": 1
      },
      {
          "id": {
              "orderId": 1,
              "productId": 3
          },
          "order": {
              "id": 1
          },
          "product": {
              "id": 3,
              "name": "eee",
              "description": "eee",
              "autor": "eee",
              "edition": "eee",
              "date": null,
              "price": 5.0,
              "image": "eee"
          },
          "quantity": 1
      }
  ],
  [
      {
          "id": {
              "orderId": 2,
              "productId": 1
          },
          "order": {
              "id": 2
          },
          "product": {
              "id": 1,
              "name": "ddd",
              "description": "ddd",
              "autor": "ddd",
              "edition": "ddd",
              "date": null,
              "price": 15.0,
              "image": "dddd"
          },
          "quantity": 1
      },
      {
          "id": {
              "orderId": 2,
              "productId": 2
          },
          "order": {
              "id": 2
          },
          "product": {
              "id": 2,
              "name": "fff",
              "description": "fff",
              "autor": "fff",
              "edition": "fff",
              "date": null,
              "price": 10.0,
              "image": "fff"
          },
          "quantity": 1
      }
  ]
]*/

function Order() {
  const [myOrders, setMyOrders] = useState([]);
  const [isExpand, setIsExpand] = useState(false);
  useEffect(() => {
    const {user}= JSON.parse(localStorage.getItem("persist:root"));
    const userId=JSON.parse(user).id;
    const url = "http://localhost:8080/api/user/" + userId + "/orders";
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
        console.log("tttttttttttttttt: ",json )
        setMyOrders(json.flatMap(num => num))
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const order=myOrders && myOrders.reduce((cum,ord)=>{
    if (!cum[ord.order.id]) {
      cum[ord.order.id] = [];
    }
    cum[ord.order.id].push({...ord.product,quantity:ord.quantity});
    return cum;

  },{});
  return (
    <>
      <div className="container">
      <div className="row text-center mb-5">
          <h4>Commandes</h4>
        </div>
        <div className="row rounded-0">
          <div className="col-12 rounded-0">
          <div class="accordion border-0 rounded-0" id="accordionPanelsStayOpenExample">         
            {order && Object.keys(order).length >0 && Object.keys(order).map(ord =>
              <>              
 <div class="accordion accordion-flush" id="accordionFlushExample" onClick={()=>setIsExpand(!isExpand)}>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class={isExpand?"accordion-button":"accordion-button collapsed"} type="button" 
       data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded={isExpand?true:"false"} aria-controls="flush-collapseOne">
        #Order {ord}
      </button>
    </h2>
    <div id="flush-collapseOne" class={isExpand?"accordion-collapse collapse show":"accordion-collapse collapse"} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
	  
	                      {order[ord].map(book=>
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
