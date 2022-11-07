const initAdress=[]


const adress = (adress =initAdress  , action) => {

  switch (action.type)
        {
        case "GET_ADRESSES":
            {console.log('action.payload',action.payload);return action.payload}  
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
