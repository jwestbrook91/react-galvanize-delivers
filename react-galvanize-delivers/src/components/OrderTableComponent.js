import React from 'react';
export default function OrderTableComponent({ orderItems }) {
  let subtotal = 0;
  if (orderItems) {
    orderItems.reduce(function(sum, item) {
      return (subtotal = sum + item.price);
    }, 0);
  }
  let tax = subtotal * 0.09;
  let total = subtotal + tax;

  return (
    <div className="OrderTableComponent">
      <div className="col s12 center m5 l5">
        <h3 className="orange-text text-darken-1">Order</h3>
      </div>
      <table className="striped lighten-4 orange-text text-darken-1">
        <thead>
          <tr>
            <th className="left-align">Items In Your Basket</th>
            <th style={{ textAlign: 'right' }} className="center-align">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {orderItems
            ? orderItems.map(item =>
                <tr key={item.id}>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.price}
                  </td>
                </tr>
              )
            : ''}
        </tbody>
        <tfoot id="tfoot">
          <tr>
            <td style={{ textAlign: 'right' }}>Subtotal</td>
            <td id="subtotal" className="center">
              {`$${subtotal.toFixed(2)}`}
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'right' }}>Tax</td>
            <td id="tax" className="center">
              {`$${tax.toFixed(2)}`}
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'right' }}>Total</td>
            <td id="total" className="center">
              {`$${total.toFixed(2)}`}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
