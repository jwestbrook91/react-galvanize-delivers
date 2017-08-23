import React from 'react';

export default function OrderFormComponent({ customerInfo }) {
  return (
    <div>
      <form>
        <div className="input-field">
          <i className="material-icons prefix small">person</i>
          <input id="name" type="text" />
          <label htmlFor="name">
            {customerInfo.name}
          </label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix small">smartphone</i>
          <input id="phone" type="tel" />
          <label className="phone">
            {customerInfo.phone}
          </label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix small">home</i>
          <input id="address" type="text" />
          <label htmlFor="address">
            {customerInfo.address}
          </label>
        </div>
      </form>

      <button id="orderup" className="btn-large center-align orange darken-1">
        <i className="material-icons left">local_taxi</i>CHECKOUT
      </button>
    </div>
  );
}
