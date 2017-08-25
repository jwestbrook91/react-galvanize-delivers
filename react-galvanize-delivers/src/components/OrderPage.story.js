import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderPage from './OrderPage';

let customerInfo = {
  id: 0,
  name: 'Nestor Toro',
  phone: '(650) 533-8676',
  address: '123 Main Street, Oakland, CA'
};

let menuItems = [
  {
    id: 1,
    name: 'Some Item A',
    price: 7.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 2,
    name: 'Some Item B',
    price: 10.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 3,
    name: 'Some Item C',
    price: 6.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 4,
    name: 'Some Item D',
    price: 12.99,
    imagePath: '//via.placeholder.com/300x200'
  }
];

const orderItems = [];

storiesOf('OrderPage', module).add('Happy Path', () => <OrderPage menuItems={menuItems} orderItems={orderItems} customerInfo={customerInfo} />);
