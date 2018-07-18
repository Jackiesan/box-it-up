import {
  CATEGORIES_FETCH_SUCCESS,
} from './types'


export const categoriesFetch = () => {

  return (dispatch) => {
    fetch(`https://seattle-charities-api.herokuapp.com/categories`)
    .then( response => response.json())
    .then( json => {
      dispatch({ type: CATEGORIES_FETCH_SUCCESS, payload: json.data })
    })
  }
};
