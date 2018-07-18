import { combineReducers } from 'redux';
import CategoryReducer from './CategoryReducer';
import SelectionReducer from './SelectionReducer';
import OrganizationReducer from './OrganizationReducer'

export default combineReducers({
  categories: CategoryReducer,
  organizations: SelectionReducer,
  organization: OrganizationReducer,
});
