import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';

import './MenuItemComponent.story.css';

storiesOf('MenuItemComponent', module)
  .add('Complete item passed in', () =>
    <MenuItemComponent
      item={{
        id: 1,
        name: 'Some Item A',
        price: 7.99,
        imagePath: '//via.placeholder.com/300x200'
      }}
    />
  )
  .add('Incomplete item passed in', () =>
    <MenuItemComponent
      item={{
        imagePath: '//via.placeholder.com/300x200'
      }}
    />
  )
  .add('Empty item object passed in', () => <MenuItemComponent item={{}} />)
  .add('No item passed in', () => <MenuItemComponent />);
