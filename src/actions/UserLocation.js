import {
  LOCATION_FETCH_SUCCESS,
} from './types'

export const locationFetch = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        dispatch({
          type: LOCATION_FETCH_SUCCESS,
          payload:position
        });
      },
      (error)=>console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
    );
  }
}
