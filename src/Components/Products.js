import { useDispatch } from "react-redux";

function Products(props) {
  const dispatch = useDispatch();

  console.log("++++++++++++++++++++: ", props.listProduct);

  return (
    <>
      {props.listProduct &&
        props.listProduct.length > 0 &&
        props.listProduct.map((product) => {
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
                          onClick={() =>
                            dispatch({
                              type: "ADD_ITEM_IN_BASKET",
                              payload: { ...product, quantity: 1 },
                            })
                          }
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
