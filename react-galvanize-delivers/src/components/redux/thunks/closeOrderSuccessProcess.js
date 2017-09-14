export default function closeOrderFormProcess() {
  return (dispatch, getState) => {
    dispatch({
      type: 'CLOSE_ORDER',
      customerInfo: null,
      orderItems: []
    });
  };
}
