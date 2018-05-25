const searchDataReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'POPULATE_SEARCH_DATA':
      return state;
      break;
  
    default: state
      break;
  }
}