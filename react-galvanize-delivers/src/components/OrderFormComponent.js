import React from 'react';

export default class OrderFormComponent extends React.Component {
  state = {
    hasValidationErrors: false
  };

  render() {
    return (
      <div>
        <form className="OrderFormComponent" onSubmit={this._handleSubmit}>
          <div className="input-field">
            <i className="material-icons prefix small">person</i>
            <input id="name" type="text" name="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix small">smartphone</i>
            <input id="phone" type="tel" />
            <label className="phone">Phone</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix small">home</i>
            <input id="address" type="text" />
            <label htmlFor="address">Address</label>
          </div>
          <button id="orderup" className="btn-large center-align orange darken-1">
            <i className="material-icons left">local_taxi</i>CHECKOUT
          </button>
          {this.state.hasValidationErrors
            ? <p style={{ color: 'red', fontWeight: 'bold' }}>You've entered incorrect information. Please make sure all information is correct.</p>
            : null}
        </form>
      </div>
    );
  }
  _handleSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    let name = $form.name.value;
    let phone = $form.phone.value;
    let address = $form.address.value;
    if (
      name.length > 3 &&
      /^[a-zA-Z\s]+/.test(name) &&
      phone.length >= 10 &&
      phone.length < 12 &&
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
