const iState = {
    users:[]
}

const reducer = (state = iState, action) => {
    switch (action.type) {
      case "GET_USER":
        return {
          ...state,
          users: action.payload,
        };
      case "DELETE_USER":
        return {
         state
        };
      case "POST_USER":
        return {
          ...state,
          users: action.payload,
        };
      case "UPDATE_USER":
        return {
          ...state,
          users: action.payload,
        };

      default:
        return state;
    }
}
export default reducer;