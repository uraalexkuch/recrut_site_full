const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('userInfo', JSON.stringify(action.payload.user));
      localStorage.setItem('accessToken', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case 'LOGOUT':
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export default reducer;
