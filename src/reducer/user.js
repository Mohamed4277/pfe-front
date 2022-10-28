
const user = (user = {isConnected: false}, action) => {

  switch (action.type)
        {case "IS_CONNECTED":
            return {...user, isConnected: action.payload.isConnected, 
                             roles: action.payload.roles,
                             username: action.payload.username,
                             lastName: action.payload.lastName,
                             id:action.payload.id,
                             name: action.payload.name }
        }
  return user;

  }
export default user;
