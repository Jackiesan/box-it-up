import {
  CATEGORY_ORGS_FETCH_SUCCESS,
} from './types';

export const selectCategory = (orgId) => {

  return (dispatch) => {
  fetch(`https://seattle-charities-api.herokuapp.com/categories/${orgId}/organizations`)
  .then( response => response.json())
  .then( json => {
    dispatch({ type: CATEGORY_ORGS_FETCH_SUCCESS, payload: json.data })
  });
  }
};
