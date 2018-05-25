import { populateSearchData } from './index';

describe('populateSearchData', () => {

  it('takes in an argument and outputs an action object', () => {
    const mockSearchData = [{ School: 'is fun...'}];
    const actual = populateSearchData( mockSearchData );
    const expected = {
      type: 'POPULATE_SEARCH_DATA',
      searchData: [{ School: 'is fun...'}]
    }

    expect(actual).toEqual(expected);

  })
})