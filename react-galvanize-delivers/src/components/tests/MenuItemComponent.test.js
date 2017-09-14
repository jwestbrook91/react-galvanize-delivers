import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItemComponent from '../components/MenuItemComponent';
import { assert } from 'chai';

const onAddItem = itemId => {
  console.log(`This is the itemID!!! ${itemId}`);
};
const item = { name: 'Item A', price: 8.99, imagePath: '//via.placeholder.com/300x200' };

describe('a shallow test', () => {
  const shallowWrapper = shallow(<MenuItemComponent onAddItem={onAddItem} item={item} />);

  it('should display Item Name', () => {
    let title = shallowWrapper.find('.card-title');
    assert.equal(title.length, 1);
  });
  it('should display Item Price', () => {
    let price = shallowWrapper.find('.card-content').children('p');
    assert.equal(price.length, 1);
  });

  it('should see if onAddItem function fired', () => {
    const onAddItem = jest.fn();
    mount(<MenuItemComponent onAddItem={onAddItem} item={item} />).find('.chooseItem').simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });
  it('should match snapshot', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
});
