import React from 'react';
import MenuItemComponent from './MenuItemComponent';
export default function MenuComponent({ items, onAddItem }) {
  if (items && Array.isArray(items)) {
    return (
      <div className="MenuComponent">
        {items.map(item => <MenuItemComponent item={item} key={item.id} onAddItem={onAddItem} />)}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
