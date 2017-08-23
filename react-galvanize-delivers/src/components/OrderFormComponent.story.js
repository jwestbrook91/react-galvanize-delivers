import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent';

import './OrderFormComponent.story.css';

storiesOf('OrderFormComponent', module).add('Happy Path', () =>
  <OrderFormComponent
    customerInfo={{
      id: 0,
      name: 'Nestor Toro',
      phone: '(650) 533-8676',
      address: '123 Main Street, Oakland, CA'
    }}
  />
);
