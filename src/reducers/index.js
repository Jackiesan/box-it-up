import { combineReducers } from 'redux';
import CategoryReducer from './CategoryReducer';
import SelectionReducer from './SelectionReducer';
import OrganizationReducer from './OrganizationReducer';
import CoordinateReducer from './CoordinateReducer';
import LocationReducer from './LocationReducer';
import CategoriesReducer from './CategoriesReducer';

export default combineReducers({
  categories: CategoryReducer,
  organizations: SelectionReducer,
  organization: OrganizationReducer,
  coordinates: CoordinateReducer,
  location: LocationReducer,
  categoriesoforg: CategoriesReducer
});
