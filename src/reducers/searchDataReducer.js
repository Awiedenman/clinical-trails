export const searchDataReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'POPULATE_SEARCH_DATA':
     return [ ...action.searchData ]
  
    default: 
      return state
  }

  }

  export default searchDataReducer;
