import React, {useEffect, useState} from "react";
import { Cart3, Power, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { persistor } from "../redux/store";
import { PURGE } from 'redux-persist';

function NavBar() {
  const navigate = useNavigate();
  const [isExpand, setIsExpand]=useState(false);
  const [isExpandNav, setIsExpandNav]=useState(false);
  const [isExpandPerson, setIsExpandPerson]=useState(false);
  const { cart, user,category } = useSelector((state) => state);
  const [categorySelected,setCategorySelected]=useState();
  const dispatch=useDispatch();

  useEffect(()=>{
    const url="http://localhost:8080/api/category";
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
        dispatch({type:"GET_CATEGORY", payload:json})
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  },[])


  useEffect(()=>{
    const url=categorySelected? "http://localhost:8080/api/product/category/" + categorySelected:
    "http://localhost:8080/api/product";
    const token =localStorage.getItem("access_token");
    const fetchDataByCategory =async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-Type": "application/json",
          },
        });
        const json = await response.json();
        dispatch({type:"GET_PRODUCTS", payload:json})
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchDataByCategory();
  },[categorySelected])

  const nbItem =
    cart &&
    cart.length > 0 &&
    cart.reduce((acc, currentvalue) => {
      return acc + parseInt(currentvalue.quantity, 10);
    }, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar-mb">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home" >
            <h3>MyBookStore.</h3>
          </a>
            <button  OnClick={()=>setIsExpandNav(!isExpandNav)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded={isExpandNav?"true":"false"} aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
          {user.isConnected && <div className={isExpandNav?"collapse navbar-collapse show":"collapse navbar-collapse" } id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown" onClick={()=>setIsExpand(!isExpand)}>
                <a class={isExpand?"nav-link dropdown-toggle show":"nav-link dropdown-toggle"} 
                   href="#" id="navbarDropdown" role="button" data-toggle="dropdown"  aria-expanded={isExpand}>
                  Catalogue
                </a>
                <div class={isExpand?"dropdown-menu show rounded-0":"dropdown-menu"} aria-labelledby="navbarDropdown">
                  {category.map(cat=><a class="dropdown-item" href="#" onClick={()=>{setCategorySelected(cat.category)}}>{cat.category}</a>)}
                </div>
             </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <div className="col">
                <button
                  className="btn btn-lg button-margin"
                >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown" onClick={()=>setIsExpandPerson(!isExpandPerson)}>
                <a class={isExpandPerson?"nav-link dropdown-toggle show":"nav-link dropdown-toggle"} 
                   href="#" id="navbarDropdown" role="button" data-toggle="dropdown"  aria-expanded={isExpandPerson}>
                                    <Person size={20} />
                </a>
                <div class={isExpandPerson?"dropdown-menu show rounded-0":"dropdown-menu"} aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/order">Commandes</a>
                  <a class="dropdown-item" href="/wishlist">Liste de souhaits</a>
                  <a class="dropdown-item" href="/person-information">Information personnelle</a>
                  <a class="dropdown-item" href="/adress">Adresses</a>
                  <a class="dropdown-item" href="/payment-mode">Methodes de payements</a>
                </div>
             </li>
            </ul>
                </button>
                <button
                  onClick={() => navigate("/cart")}
                  className="btn btn-lg  button-margin"
                >
                  <div className="d-inline ft-nb-item">{nbItem}</div>
                  <Cart3 size={20} />
                </button>
                <button
                  onClick={() => {
                    /*persistor.purge()*/
                    window.localStorage.clear();
                    dispatch({type:"IS_CONNECTED", payload:{isConnected:false}})
                    dispatch({type:"REMOVE_CART"})
                    /*dispatch({type: "USER_LOGOUT"})*/
                    /*persistor.purge()*/
                    navigate("/")
                  }}
                  className="btn btn-lg button-margin"
                >
                  <Power size={20} />
                </button>
              </div>
            </div>
          </div>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
