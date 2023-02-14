const initAdress=[]


const adress = (adress =initAdress  , action) => {

  switch (action.type)
        {
        case "GET_ADRESSES":
            {console.log('action.payload',action.payload);              let j= 0;
              let k=0;return action.payload.sort((a,b)=>(b.id-a.id)).reduce((cum,obj)=>{
              


              
              if (obj.isDeliveryAdress===true && obj.isInvoiceAdress===true && j===0){

           cum.push({...obj, isInvoiceAdress:false, adress:"Adresse de livraison", order:2});
           cum.push({...obj, isDeliveryAdress:false, adress:"Adresse de facturation",order: 1});
           console.log('ici')
             j++} else {cum.push({...obj, isInvoiceAdress:false, isDeliveryAdress:false, adress: "Adresse",order:0 }) }     
          
          
          
              console.log(cum);
          
          
          return cum
          
          },[]).sort((a,b)=>b.order-a.order)}  
        case "DISPLAY_ADRESS":
             { if (action.payload.adress.id){
              return [...adress.filter(ad=>ad.id !== action.payload.adress.id), action.payload.adress ]
             }
              return [...adress, action.payload.adress]
            }
        case "DELETE_ADRESS":
          {console.log('reducer adress: ' ,  action.payload.id); return adress.filter(ad=>ad.id !== action.payload.id)}
        default:
           return adress
        }

  }
export default adress;
