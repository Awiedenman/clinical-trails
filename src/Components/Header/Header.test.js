import { Header } from './Header';
import { shallow } from 'enzyme';
import React from 'react';

describe('Header', () =>{
  let wrapper;

  it('matches the snapshot', () => {
    wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  })
})
