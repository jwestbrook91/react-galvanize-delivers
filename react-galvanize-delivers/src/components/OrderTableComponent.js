import React from 'react';
export default function OrderTableComponent({ items }) {
  let subtotal = items.reduce(function(sum, item) {
    return (sum += item.price);
  }, 0);

  const taxRate = 0.08;
  const tax = (subtotal * taxRate).toFixed(2);
  const totalPrice = subtotal + Number(tax);

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
          {items.map(orderItem =>
            <tr key={orderItem.id}>
              <td>
                {orderItem.name}
              </td>
              <td>
                {orderItem.price}
              </td>
            </tr>
          )}
        </tbody>
        <tfoot id="tfoot">
          <tr>
            <td style={{ textAlign: 'right' }}>Subtotal</td>
            <td id="subtotal" className="center">
              {subtotal}
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'right' }}>Tax</td>
            <td id="tax" className="center">
              {tax}
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'right' }}>Total</td>
            <td id="total" className="center">
              {totalPrice}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
