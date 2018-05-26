import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { mapDispatchToProps, App } from './App';

it('calls mapDispatchToProps with the correct argument', () => {
  const mockDispatch = jest.fn;
  const mappedProps = mapDispatchToProps( dispatch );

  const mockAction = {
    type: POPULATE_SEARCH_DATA,
    searchData: [ Lupus ]
  }

  mappedProps.mapDispatchToProps( mocAction.searchData )

  expect( dispatch ).toHaveBeenCalledWith(mockAction);
});
