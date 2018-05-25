import { combineReducers } from 'redux';
import { searchDataReducer } from './searchDataReducer';

export const rootReducer = combineReducers({
  searchDataReducer,
})