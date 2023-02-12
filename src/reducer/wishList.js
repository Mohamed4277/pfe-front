const wishListInitial= []


const wishList = (wishList =wishListInitial  , action) => {

  switch (action.type)
        {case "GET_WISH_LIST":
            {console.log("dddddddddddddd: ", wishList); return action.payload}
         case "ADD_PRODUCT_TO_WISH_LIST":
              return [...wishList.filter(product=>product.id != action.payload.id), action.payload]
         case "REMOVE_WISH_LIST":
             return []
        default:
          return wishList;
        }


  }
export default wishList;
