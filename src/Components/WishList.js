import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import Card from "./Card"

function WishList() {
  const [wishList, setWishList] = useState({});
  useEffect(() => {
    const {user}= JSON.parse(localStorage.getItem("persist:root"));
    const username=JSON.parse(user).username;
    const url = "http://localhost:8080/api/user/" +username;
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
        setWishList(json.whishList);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  
  const dispatch = useDispatch();
  return (
    <>

        <div className="row text-center mb-5">
          <h4>Liste de souhaits</h4>
        </div>
   
          {wishList &&
          wishList.product &&
          wishList.product.length > 0 &&
          wishList.product.map((product) => {
            return (
              <Card product={product} addItem={() =>
                dispatch({
                  type: "ADD_ITEM_IN_BASKET",
                  payload: { ...product, quantity: 1 },
                })}/>
            );
          })}

    </>
  );
}

export default WishList;
