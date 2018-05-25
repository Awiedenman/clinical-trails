import { combineReducers } from 'redux';
import { searchDataReducer } from './searchDataReducer';

console.log('searchDataReducer',searchDataReducer)
export const rootReducer = combineReducers({
  searchData: searchDataReducer
})