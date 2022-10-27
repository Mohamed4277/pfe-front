
const user = (user = {isConnected: false}, action) => {

  /*if (action.type==="IS_CONNECTED"){
    console.log("entrer dans action")
    return {...user, isConnected:action.payload.isConnected}
  }

  return user;*/

  switch (action.type)
        {case "IS_CONNECTED":
            return {...user, isConnected: action.payload.isConnected, 
                             roles: action.payload.roles,
                             username: action.payload.username}
        }
  return user;

  }
export default user;
