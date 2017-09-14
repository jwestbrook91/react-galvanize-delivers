export default function rootReducer(
  currentState = {
    menuItems: null,
    orderItems: [],
    customerInfo: null
  },
  action
) {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        menuItems: action.newMenuItems,
        orderItems: [],
        customerInfo: null
      };

    case 'ADD_ITEM':
      return {
        ...currentState,
        orderItems: [...currentState.orderItems, currentState.menuItems.find(item => item.id === action.id)]
      };

    case 'SUBMIT_ORDER':
      return {
        ...currentState,
        customerInfo: { name: action.name, phone: action.phone, address: action.address }
      };

    case 'CLOSE_ORDER':
      return {
        ...currentState,
        customerInfo: action.customerInfo,
        orderItems: action.orderItems
      };

    default:
      return currentState;
  }
}
