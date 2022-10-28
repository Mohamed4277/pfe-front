const wishListInitial= [
  {
    image: "image 1",
    name: "Livre 1",
    price: 14,
  },
  {
    image: "image 2",
    name: "Livre 2",
    price: 10,
  },
  {
    image: "image 3",
    name: "Livre 3",
    price: 8,
  },
]


const wishList = (wishList =wishListInitial  , action) => {

  switch (action.type)
        {case "GET_ADRESSES":
            return wishList
        }
  return wishList;

  }
export default wishList;
