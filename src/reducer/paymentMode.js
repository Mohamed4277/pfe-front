const initPaymentModey=[];

const paymentMode = (paymentMode =initPaymentModey  , action) => {

  switch (action.type)
  {
  case "GET_PAYMENT_MODE":
      {console.log('action.payload',action.payload);
      let k=0;
      return action.payload.sort((a,b)=>b.id-a.id).reduce((cum,obj)=>{

        if (obj.isCreditCardToUse===true && k===0){  cum.push({...obj,order:1});
          k++ } else 
          {
            cum.push({...obj,isCreditCardToUse:false,order:0})
          }
        
       return cum
      }






      ,[]).sort((a,b)=>b.order-a.order)
      
      
      
      
      }  
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
