import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { mapDispatchToProps, App } from './App';

describe('mapDispatchToProps', () => {

  it('mapDispatchToProps was called with the correct argument', () => {
    const dispatch = jest.fn();
    const mapProps = mapDispatchToProps(dispatch);
    const mockData = {
      sup: "dood"
    }
    const expected = {
      type: 'POPULATE_SEARCH_DATA',
      searchData: mockData
    }
  
    mapProps.populateSearchData(mockData)

    expect(dispatch).toHaveBeenCalledWith(expected);
  })
})


