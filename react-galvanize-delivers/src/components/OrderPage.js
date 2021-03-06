import React from 'react';

import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';

export default function OrderPage({ id, menuItems, orderItems, customerInfo, onAddItem }) {
  return (
    <div id={id} className="OrderPage">
      <OrderPageLayout>
        <MenuComponent items={menuItems} />
        <OrderTableComponent items={orderItems} />
        <OrderFormComponent customerInfo={customerInfo} />
      </OrderPageLayout>
    </div>
  );
}
