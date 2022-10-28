const initPaymentModey=[
  {
    id:1,
    name: "carte 1",
    cardType: "Visa",
    cardNumber: "44554445444554",
    codeSecret: 456,
  },
  {
    id:2,
    name: "carte 2",
    cardType: "Card",
    cardNumber: "445544545444554",
    codeSecret: 367,
  },
  { id:3,
    name: "carte 3",
    cardType: "Visa",
    cardNumber: "44554455644554",
    codeSecret: 167,
  },
];

const paymentMode = (paymentMode =initPaymentModey  , action) => {

  switch (action.type)
        {case "GET_PAYMENT_MODE":
            return paymentMode
        }
  return paymentMode;

  }
export default paymentMode;
