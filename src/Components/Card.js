import React from "react";

function Card({product,addItem,removeItem,updateItem}){

return <>
            <div className="container">
              <div class="card mt-3 border-start-0 border-top-0 border-end-0 border-bottom-3 rounded-0">
                <div class="row no-gutters">
                  <div class="col-md-2">
                    <img
                      src="https://servimg.eyrolles.com/static/media/0188/9782416000188_internet_b200x200.jpg"
                      width={150}
                    />
                  </div>
                  <div class="col-md-10 ps-3 pt-3 pb-3">
                      <h5 class="card-title">{product.name}</h5>
                      <p class="card-text">{product.description}</p>
                      <p class="card-text">
                        <p>{product.price} €</p>
                        {addItem && <div className="row"><button
                          type="button"
                          class="btn btn-lg btn-primary rounded-0"
                          onClick={addItem}
                        >
                          Ajouter au panier
                        </button></div>}
                        {removeItem && updateItem &&

<>
<input
className="form-control"
id="nbOfProduct"
name="nbOfProduct"
onChange={updateItem
}
/>
  <button
    type="button"
    className="btn btn btn-danger btn-lg button-margin"
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