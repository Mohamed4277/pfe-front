import React from "react";
import { Heart } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

  //Get Image from folder
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }


function Card({isAdmin,product,cart,addItem,removeItem,updateItem,addToWishList}){
const navigate=useNavigate();
const images = importAll(
  require.context("../Images", false, /\.(png|jpe?g|svg)$/)
);
return <>
            <div className="container">
              <div className="card mt-3 border-start-0 border-top-0 border-end-0 border-bottom-3 rounded-0">
                <div className="row no-gutters">
                  <div className="col-md-2">
                    <img
                      src={images[product.image]}
                      width={150}
                      onClick={()=>{navigate("/product/" + product.id)}}
                    />
                  </div>
                  <div className="col-md-10 ps-3 pt-3 pb-3">
                      <h5 className="card-title">{product.name}</h5>
                      <div className="card-text">{product.description}</div>
                      <p className="card-text">
                        <p>{product.price} €</p>
                        {
                          isAdmin && <button
                          id="add-item"
                          type="button"
                          className="btn btn-lg me-4 btn-primary rounded-0"
                        >
                          Mettre à jour
                        </button>
                        }
                        {
                          isAdmin && <button
                          id="add-item"
                          type="button"
                          className="btn btn-lg btn-danger rounded-0"
                        >
                          Supprimer
                        </button>
                        }

                        {!isAdmin && addItem && <><button
                          id="add-item"
                          type="button"
                          className="btn btn-lg btn-primary rounded-0"
                          onClick={addItem}
                        >
                          Ajouter au panier
                        </button>
                        {isAdmin && addToWishList && <button
                          type="button"
                          className="btn btn-lg ms-3 rounded-0 btn btn-outline-secondary"
                          onClick={addToWishList}
                        >
                        <Heart size={20} />
                        </button>}</>}
                        {removeItem && updateItem &&
                            <>
                            <input
                            className="form-control width-quantity mb-2 rounded-0"
                            id="nbOfProduct"
                            name="nbOfProduct"
                            defaultValue={cart && cart.length >0 && cart.filter((item=>item.id==product.id))[0].quantity}
                            onChange={updateItem}
                            />
                              <button
                                type="button"
                                className="btn btn btn-danger btn-lg button-margin rounded-0"
                                onClick={removeItem}
                              >
                                Supprimer du panier
                              </button>
                              </>

                        }
                      </p>
                  
                  </div>
                </div>
              </div>
            </div>
</>

}

export default Card