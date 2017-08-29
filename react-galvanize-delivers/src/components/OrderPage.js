import React from 'react';

import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';

export default function OrderPage({ id, menuItems, orderItems, onAddItem, onSubmitOrderForm, customerInfo, onCloseOrderSuccessMessage }) {
  return (
    <div id={id} className="OrderPage">
      <OrderPageLayout>
        <MenuComponent onAddItem={onAddItem} items={menuItems} />
        <OrderTableComponent orderItems={orderItems} />
        {customerInfo
          ? <OrderSuccessMessageComponent customerInfo={customerInfo} onCloseOrderSuccessMessage={onCloseOrderSuccessMessage} />
          : <OrderFormComponent onSubmit={onSubmitOrderForm} items={orderItems} />};
      </OrderPageLayout>
    </div>
  );
}
