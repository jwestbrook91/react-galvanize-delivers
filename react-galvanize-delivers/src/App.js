import React, { Component } from 'react';
import './App.css';
import OrderPage from './components/OrderPage';
import getMenuItemsProcess from './components/redux/thunks/getMenuItemsProcess';
import addItemProcess from './components/redux/thunks/addItemProcess';
import submitOrderFormProcess from './components/redux/thunks/submitOrderFormProcess';
import closeOrderSuccessProcess from './components/redux/thunks/closeOrderSuccessProcess';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: null,
      orderItems: [],
      customerInfo: null
    };

    this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    });
  }
  render() {
    return (
      <div className="App">
        <OrderPage
          menuItems={this.state.menuItems}
          orderItems={this.state.orderItems}
          customerInfo={this.state.customerInfo}
          onAddItem={this._onAddItem}
          onSubmitOrderForm={this._onSubmitOrderForm}
          onCloseOrderSuccessMessage={this._onCloseOrderSuccessMessage}
        />
      </div>
    );
  }

  componentDidMount() {
    this.props.store.dispatch(getMenuItemsProcess());
  }

  _onAddItem = itemId => {
    this.props.store.dispatch(addItemProcess(itemId));
  };

  _onSubmitOrderForm = ({ name, phone, address }) => {
    this.props.store.dispatch(submitOrderFormProcess(name, phone, address));
  };

  _onCloseOrderSuccessMessage = () => {
    this.props.store.dispatch(closeOrderSuccessProcess());
  };
}
