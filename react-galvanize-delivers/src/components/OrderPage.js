import React from 'react';

import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';

export default function OrderPage({ id, menuItems, orderItems, customerInfo, onAddItem = () => {}, onSubmit = () => {}, onClose = () => {} }) {
  return (
    <div id={id} className="OrderPage">
      <OrderPageLayout>
        <MenuComponent onAddItem={onAddItem} items={menuItems} />
        <OrderTableComponent orderItems={orderItems} />
        {customerInfo
          ? <OrderSuccessMessageComponent customerInfo={customerInfo} onClose={onClose} />
          : <OrderFormComponent onSubmit={onSubmit} items={orderItems} />};
      </OrderPageLayout>
    </div>
  );
}
