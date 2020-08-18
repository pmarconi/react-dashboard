const initialState = {
  isSidebarOpen: false
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        isSidebarOpen: !state.isSidebarOpen,
      };
    default:
      return state;
  }
};

export default authentication;
