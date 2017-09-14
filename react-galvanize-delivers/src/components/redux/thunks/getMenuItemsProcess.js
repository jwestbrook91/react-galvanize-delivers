import getMenuItems from '../../../requests/getMenuItems';

export default function getMenuItemsProcess() {
  return (dispatch, getState) => {
    return getMenuItems().then(menuItems => {
      dispatch({
        type: 'GET_ITEMS',
        newMenuItems: menuItems
      });
      return menuItems;
    });
  };
}
