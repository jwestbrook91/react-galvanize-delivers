export default function submitOrderFormProcess(name, phone, address) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SUBMIT_ORDER',
      name: name,
      phone: phone,
      address: address
    });
  };
}
