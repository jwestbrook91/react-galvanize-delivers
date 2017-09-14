import React from 'react';
import { shallow } from 'enzyme';
import MenuComponent from './MenuComponent';

describe('<MenuComponent />', () => {
  it('should render children when passed in', () => {
    const wrapper = shallow(
      <MenuComponent>
        <div className="MenuComponent" />
      </MenuComponent>
    );
    expect(wrapper.contains(<div className="MenuComponent" />)).to.equal(true);
  });
});
