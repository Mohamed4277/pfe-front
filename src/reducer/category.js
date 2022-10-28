const categoryIntial=[
  {
    id:1,
    category: "Mathematiques",

  },
  {
    id:2,
    category: "Informatique",

  },
  {
    id:3,
    category: "Physique",

  },
  {
    id:4,
    category: "Science de la vie",

  },
  {
    id:5,
    category: "Géologie",

  }
];

const category = (category =categoryIntial  , action) => {

  switch (action.type)
        {case "GET_PAYMENT_MODE":
            return category
        }
  return category;

  }
export default category;
