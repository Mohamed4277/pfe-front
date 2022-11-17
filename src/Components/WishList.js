import React, { useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import Card from "./Card"

function WishList() {
  const dispatch=useDispatch();
  const {wishList}=useSelector((state)=>state)
  useEffect(() => {
    const {user}= JSON.parse(localStorage.getItem("persist:root"));
    const username=JSON.parse(user).username;
    const url = "http://localhost:8080/api/user/" + username;
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
        dispatch({type:"GET_WISH_LIST", payload:json.whishList.product})
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>

        <div className="row text-center mb-5">
          <h4>Liste de souhaits</h4>
        </div>
   
          {wishList &&
          wishList.length > 0 &&
          wishList.map((product) => {
            return (
              <Card product={product} addItem={() =>
                dispatch({
                  type: "ADD_ITEM_IN_BASKET",
                  payload: { ...product, quantity: 1 },
                })}
                />
            );
          })}

    </>
  );
}

export default WishList;
