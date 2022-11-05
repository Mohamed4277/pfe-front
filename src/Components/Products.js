import { useDispatch } from "react-redux";
import Card from "./Card"

function Products(props) {
  const dispatch = useDispatch();

  return (
    <>
      { props.listProduct &&
        props.listProduct.length > 0 &&
        props.listProduct.map((product) => {
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

export default Products;
