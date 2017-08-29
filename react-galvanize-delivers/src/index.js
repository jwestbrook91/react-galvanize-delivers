import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderPage from './components/OrderPage';

let data = {
  key: 'data',
  menuItems: [
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
  ]
};
const orderItems = [];

function onAddItem(itemId) {
  orderItems.push(data.menuItems.find(item => item.id === itemId));

  render();
}

function onSubmit({ name, phone, address }) {
  customerInfo = { name, phone, address };
  render();
}

let customerInfo = null;

function closeOrderMessage() {
  customerInfo = null;
  render();
}

function render() {
  ReactDOM.render(
    <OrderPage
      menuItems={data.menuItems}
      onAddItem={onAddItem}
      onClose={closeOrderMessage}
      onSubmit={onSubmit}
      orderItems={orderItems}
      customerInfo={customerInfo}
    />,
    document.getElementById('root')
  );
}
render();
