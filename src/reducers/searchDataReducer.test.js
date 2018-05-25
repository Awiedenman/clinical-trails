import { searchDataReducer } from './searchDataReducer';

describe('searchDataReducer', () => {

  it('has an itiial state of an empty array', () => {
    const mockAction = {
      type: 'WRONG_TYPE'
    }
    const mockState = [];
    const expected = [];
    const actual = searchDataReducer(mockState, mockAction)

    expect(actual).toEqual(expected);

  })

  it('takes in an action and returns the correct data', () => {
     const mockAction = {
       type: 'POPULATE_SEARCH_DATA',
       searchData: {
         items: [{LightningTalks: 'rule'}]
       }

     }
     const mockState = [];
     const expected = [{
        LightningTalks: 'rule' 
     }];

     const actual = searchDataReducer(mockState, mockAction)

     expect(actual).toEqual(expected);

  })
})
