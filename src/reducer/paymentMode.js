const initPaymentModey=[];

const paymentMode = (paymentMode =initPaymentModey  , action) => {

  switch (action.type)
  {
  case "GET_PAYMENT_MODE":
      {console.log('action.payload',action.payload);return action.payload}  
  case "DISPLAY_PAYMENT_MODE":
       { if (action.payload.paymentMode.id){
        return [...paymentMode.filter(ad=>ad.id !== action.payload.paymentMode.id), action.payload.paymentMode ]
       }
        return [...paymentMode, action.payload.paymentMode]
      }
  case "DELETE_PAYMENT_MODE":
    {console.log('reducer adress: ' ,  paymentMode.filter(ad=>ad.id != action.payload.id)); return paymentMode.filter(ad=>ad.id != action.payload.id)}
  default:
     return paymentMode
  }



  }
export default paymentMode;
