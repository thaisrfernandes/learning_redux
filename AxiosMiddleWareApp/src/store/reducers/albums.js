export const GET_ALBUMS = 'axiosMiddleware/albums/LOAD';
export const GET_ALBUMS_SUCCESS = 'axiosMiddleware/albums/LOAD_SUCCESS';
export const GET_ALBUMS_FAIL = 'axiosMiddleware/albums/LOAD_FAIL';

import api_key from '../../../api_key';

const INITIAL_STATE = {
  albums: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {...state, loading: true};
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.payload.data.topalbums.album,
      };
    case GET_ALBUMS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching albums',
      };
    case "SELECT_ALBUMS":
      return {
        ...state,
        activeAlbum: action.album,
      };
    default:
      return state;
  }
};

export const listAlbums = user => ({
  type: GET_ALBUMS,
  payload: {
    request: {
      url: `/?method=user.gettopalbums&user=${user}&api_key=${api_key}&format=json`,
    },
  },
});

export const selectAlbum = album => {
  return {
    type: 'SELECT_ALBUMS',
    album
  };
};

export default reducer;
