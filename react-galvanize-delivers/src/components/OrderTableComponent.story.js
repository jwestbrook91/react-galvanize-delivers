import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';

import './OrderTableComponent.story.css';

let orderItems = [
  {
    id: 0,
    price: 9.99,
    name: 'Some Item A'
  },
  {
    id: 1,
    price: 10.99,
    name: 'Some Item B'
  },
  {
    id: 2,
    price: 7.99,
    name: 'Some Item C'
  },
  {
    id: 3,
    price: 100,
    name: 'Some Item D'
  }
];

storiesOf('OrderTableComponent', module).add('Happy Path', () => <OrderTableComponent items={orderItems} />);
