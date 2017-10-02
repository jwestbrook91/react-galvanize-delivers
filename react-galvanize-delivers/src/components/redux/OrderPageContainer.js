import React from 'react';
import { connect } from 'react-redux';
import OrderPage from '../components/OrderPage';
import { compose, lifecycle } from 'recompose';

import addItemProcess from './thunks/addItemProcess';
import closeOrderSuccessProcess from './thunks/closeOrderSuccessProcess';
import getMenuItemsProcess from './thunks/getMenuItemsProcess';
import submitOrderFormProcess from './thunks/submitOrderFormProcess';

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    onDidMount: () => dispatch(getMenuItemsProcess()),
    onAddItem: itemId => dispatch(addItemProcess(itemId)),
    onSubmitOrderForm: ({ name, phone, address }) => dispatch(submitOrderFormProcess(name, phone, address)),
    onCloseOrderSuccessMessage: () => dispatch(closeOrderSuccessProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.onDidMount();
  }
});

export default compose(connectToStore, withLifecycle)(OrderPage);
