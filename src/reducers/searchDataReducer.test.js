import {searchDataReducer} from './searchDataReducer';

describe('searchDataReducer', () => {

  it('returns its previous state if the action type is invalid',  () => {
    const mockAction = {
      type: 'NOT_A_REAL_ACTION'
    }

    const expected = [];
    const result = searchDataReducer( undefined, mockAction);
  
    expect(result).toEqual(expected)
})

it('returns a new state when given the action type of POPULATE_SEARCH_DATA', () => {
  const mockState = [];
  const searchData = {
      "id": "cabb91cc-46b9-11e7-ba62-0242ac12000d",
      "source_id": "isrctn",
      "identifiers": {
        "isrctn": "ISRCTN15621797"
      }
    }
  const action = {
    type: 'POPULATE_SEARCH_DATA',
    searchData
  }

  const expected = searchData;
  const result= searchDataReducer( mockState, action )

  expect(result).toEqual(expected)
})



})