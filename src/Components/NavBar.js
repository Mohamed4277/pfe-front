import React, {useState} from "react";
import { Cart2, Power, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

function NavBar() {
  const navigate = useNavigate();
  const [isExpand, setIsExpand]=useState(false);
  const [isExpandPerson, setIsExpandPerson]=useState(false);
  const { cart, user } = useSelector((state) => state);
  const dispatch=useDispatch();

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
          {user.isConnected && <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown" onClick={()=>setIsExpand(!isExpand)}>
                <a class={isExpand?"nav-link dropdown-toggle show":"nav-link dropdown-toggle"} 
                   href="#" id="navbarDropdown" role="button" data-toggle="dropdown"  aria-expanded={isExpand}>
                  Catalogue
                </a>
                <div class={isExpand?"dropdown-menu show rounded-0":"dropdown-menu"} aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Mathematiques</a>
                  <a class="dropdown-item" href="#">Informatique</a>
                  <a class="dropdown-item" href="#">Physique</a>
                  <a class="dropdown-item" href="#">Science de la vie et de la terre</a>
                  <a class="dropdown-item" href="#">Géographie</a>
                  <a class="dropdown-item" href="#">Géologie</a>
                </div>
             </li>
            </ul>
            <div className="container nav-bar-align-end">
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
                  <Cart2 size={20} />
                </button>
                <button
                  onClick={() => {
                    window.localStorage.clear();
                    dispatch({type:"IS_CONNECTED", payload:{isConnected:false}})
                    dispatch({type:"REMOVE_DART", payload:{isConnected:false}})
                    navigate("/");
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
