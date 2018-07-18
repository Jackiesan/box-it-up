import {
  ORGANIZATION_FETCH_SUCCESS,
} from './types'

export const organizationFetch = (ein) => {
  return (dispatch) => {
    fetch(`https://seattle-charities-api.herokuapp.com/orgs?ein=${ein}`)
    .then( response => response.json())
    .then( json => {
      dispatch({ type: ORGANIZATION_FETCH_SUCCESS, payload: json })
    });
  }
}
