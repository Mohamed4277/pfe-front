
const cart = (cart = [], action) => {
  if (action.type === "ADD_ITEM_IN_BASKET") {
    let tempcart = cart.filter((item) => item.id === action.payload.id);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  }
  if (action.type === "REMOVE_ITEM_FROM_CART") {
    return cart.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === "UPDATE_QUANTITY_ITEM") {
    let tempcart = cart.map((item) => {
      return item.id === action.payload.id
        ? { ...item, quantity: action.payload.quantity }
        : item;
    });
    return tempcart;
  }
  if (action.type === "REMOVE_CART") {
       return [];
  }
  return cart;
};

export default cart;
