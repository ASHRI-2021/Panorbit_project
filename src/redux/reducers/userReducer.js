const defaultState = {
    usersList: [],
    selectedUser: null
}

function userReducer(state = defaultState, action) {
    switch (action.type) {
      case "USERS_LIST":
        return { ...state, usersList: action.usersList };
      case "SELECTED_USER":
        return { ...state, selectedUser: action.selectedUser };
      default:
        return state;
    }
  }
  
  export default userReducer;