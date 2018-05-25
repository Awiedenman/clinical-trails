export const populateSearchData = (searchData) => {
  console.log(searchData)
  return {
    type: 'POPULATE_SEARCH_DATA',
    searchData
    
  }
}