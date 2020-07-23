export default (state, action) => {
    switch(action.type) {
      case 'GET_USERS':
        return{
          ...state,
          users: action.payload,
          loading:false
        }
      case 'GET_USER':
          return{
            ...state,
            users: action.payload,
            loading:false
          }
      
      case 'TRANSACTION_ERROR':
          return {
            ...state,
            error:action.payload
            
          }
      default:
        return state;
    }
  }