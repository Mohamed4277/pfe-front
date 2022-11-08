const categoryIntial=[];

const category = (category =categoryIntial  , action) => {

  switch (action.type)
        {
          
        case "GET_CATEGORY":
          return action.payload
         default:
          return category;
        }
  
  }
export default category;
