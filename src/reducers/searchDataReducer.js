export const searchDataReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'POPULATE_SEARCH_DATA':
    console.log(action.searchData)
     return action.searchData.items
  
    default: 
      return state
  }
}

