import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuComponent from '../../components/MenuComponent';
import MenuItemComponent from '../../components/MenuItemComponent';
import { assert } from 'chai';

const item = { name: 'Item A', price: 8.99, imagePath: '//via.placeholder.com/300x200' };

const menuItems = [
  {
    id: 1001,
    name: 'Royale with Cheese',
    price: 8.99,
    imagePath: 'img/burger.jpg'
  },
  {
    id: 1002,
    name: 'Arugula Pie',
    price: 11.99,
    imagePath: 'img/pizza.jpg'
  },
  {
    id: 1003,
    name: 'Smoked Swine',
    price: 14.99,
    imagePath: 'img/ribs.jpg'
  },
  {
    id: 1004,
    name: 'Ice Cream Biscut',
    price: 7.99,
    imagePath: 'img/ice_cream.jpg'
  }
];

describe(' tests for MenuComponent', () => {
  it('should have the same number of menuItems as the data', () => {
    let count = mount(<MenuComponent items={menuItems} />).find('MenuItemComponent').length;
    assert.equal(count, menuItems.length);
  });
  it('onAddItem should be called', () => {
    const onAddItem = jest.fn();
    mount(<MenuItemComponent onAddItem={onAddItem} item={item} />).find('.chooseItem').simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });
});
