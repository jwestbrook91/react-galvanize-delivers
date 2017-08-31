import React, { Component } from 'react';
import OrderPage from './components/OrderPage';
import getMenuItems from './requests/getMenuItems';
import './App.css';

export default class App extends Component {
  state = {
    menuItems: null,
    orderItems: [],
    customerInfo: null
  };

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
    getMenuItems().then(menuItems => {
      this.setState({
        menuItems
      });
    });
  }

  _onAddItem = itemId => {
    this.setState(prevState => {
      return {
        orderItems: [...prevState.orderItems, prevState.menuItems.find(item => item.id === itemId)]
      };
    });
  };

  _onSubmitOrderForm = ({ name, phone, address }) => {
    this.setState({ customerInfo: { name, phone, address } });
  };

  _onCloseOrderSuccessMessage = event => {
    this.setState({ customerInfo: null });
    this.setState({ orderItems: [] });
  };
}
