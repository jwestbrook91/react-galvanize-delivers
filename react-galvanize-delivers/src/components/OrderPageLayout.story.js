import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';
import './OrderPageLayout.story.css';

storiesOf('OrderPageLayout', module).add('Happy Path', () =>
  <OrderPageLayout>
    <MenuComponent
      items={[
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
      ]}
    />

    <OrderTableComponent
      items={[
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
      ]}
    />
    <OrderFormComponent
      customerInfo={{
        id: 0,
        name: 'Nestor Toro',
        phone: '(650) 533-8676',
        address: '123 Main Street, Oakland, CA'
      }}
    />
  </OrderPageLayout>
);
