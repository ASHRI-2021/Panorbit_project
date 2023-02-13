const defaultState = {
    isChatOpen: false,
    selectedChat: null
}

function chatReducer(state = defaultState, action) {
    switch (action.type) {
      case "CHAT_OPEN":
        return { ...state, isChatOpen: action.isChatOpen };
      case "SELECTED_CHAT":
        return { ...state, selectedChat: action.selectedChat };
      default:
        return state;
    }
  }
  
  export default chatReducer;