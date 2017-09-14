export default function addItemProcess(itemId) {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_ITEM',
      id: itemId
    });
  };
}
