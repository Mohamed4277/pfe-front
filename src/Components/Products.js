import { useDispatch } from "react-redux";
import Card from "./Card"
import { useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const {product:listProduct}= useSelector((state)=>state)

  return (
    <>
      { listProduct &&
        listProduct.length > 0 &&
        listProduct.map((product) => {
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
