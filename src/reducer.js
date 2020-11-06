export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: 'BQB9ViXN_RfwRXEO-CsnGpxqtrHF-EGX4UXxJXflq9WFVMUJqkb0s-zSQvNgA1ICTUJCv2ZBT35dENWMqpBxbt_2txvPSVSSbIueyRxD9hVCXB3i40KLNf5aRk-2F4ABUkHunI6ybmOBgUu5f35hQv1axYBW2htAdverz0W5frsJKJO3'
};

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }
    default:
      return state
  }
}

export default reducer;