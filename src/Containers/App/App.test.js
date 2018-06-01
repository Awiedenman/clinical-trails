import React from 'react';
// import { dispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { mapDispatchToProps, App } from './App';

describe('mapDispatchToProps', () => {
  
  it('calls mapDispatchToProps with the correct argument', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps( mockDispatch );
  
    const mockAction = {
      type: 'POPULATE_SEARCH_DATA',
      searchData: [ 'Lupus' ]
    }
  
    mappedProps.populateSearchData( mockAction.searchData )
  
    expect( mockDispatch).toHaveBeenCalledWith(mockAction);
  });

})


describe('updateSearchCondition', () => {

  it('updates state with the correct condiditon when called', () =>{
  
  })

  it('returns the correct data when it is passed a condition', () => {

  })

  it('returns cleanSearchData when it is passed state', () => {

  })

  


})

