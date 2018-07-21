import {
  COORDINATES_FETCH_SUCCESS,
} from './types'

export const coordinatesFetch = () => {

  return (dispatch) => {
    fetch(`https://seattle-charities-api.herokuapp.com/organizations`)
    .then( response => response.json())
    .then( json => {
      dispatch({ type: COORDINATES_FETCH_SUCCESS, payload: json.data })
    })
  }
};
