import React, { Component } from 'react';

export default class OrderFormComponent extends Component {
  state = {
    hasValidationErrors: false
  };

  render() {
    return (
      <div>
        <form className="OrderFormComponent" onSubmit={this._handleSubmit}>
          <div className="input-field">
            <i className="material-icons prefix small">person</i>
            <input id="name" type="text" name="name" placeholder="Full Name" />
          </div>
          <div className="input-field">
            <i className="material-icons prefix small">smartphone</i>
            <input id="phone" type="tel" placeholder="Phone Number (Include Area Code)" />
          </div>
          <div className="input-field">
            <i className="material-icons prefix small">home</i>
            <input id="address" type="text" placeholder="Address" />
          </div>
          <button id="orderup" className="btn-large center-align orange darken-1">
            <i className="material-icons left">local_taxi</i>CHECKOUT
          </button>
          {this.state.hasValidationErrors
            ? <p style={{ color: 'red', fontWeight: 'bold' }}>You have entered incorrect information. Please make sure all information is correct.</p>
            : null}
        </form>
      </div>
    );
  }
  _handleSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    let name = $form.name.value.trim();
    let phone = $form.phone.value.trim();
    let address = $form.address.value.trim();
    if (
      name.length > 3 &&
      /^[a-zA-Z\s]+/.test(name) &&
      phone.length >= 10 &&
      phone.length < 14 &&
      /^[\d(\s][\d-\s)]+$/.test(phone) &&
      address.length > 4 &&
      /^[\d]/.test(address)
    ) {
      onSubmit({ name, phone, address });
    } else {
      this.setState({
        hasValidationErrors: true
      });
    }
  };
}
