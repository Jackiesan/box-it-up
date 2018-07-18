import {
  CATEGORY_ORGS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};


export default (state = INITIAL_STATE, action) => {
  console.log(action);
  // logs id of item selected
  // boiler plate for every reducer we create
  switch (action.type) {
    case CATEGORY_ORGS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
