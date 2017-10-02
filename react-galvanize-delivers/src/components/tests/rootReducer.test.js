import rootReducer from '../redux/rootReducer';
import data from './mock-data.json';

describe('root reducer testing', () => {
  it('should get the items', () => {
    const currentState = {
      menuItems: [],
      orderItems: [],
      customerInfo: null
    };
    const action = { type: 'GET_ITEMS', newMenuItems: data };
    const nextState = {
      menuItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      orderItems: [],
      customerInfo: null
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('should add items to orderItems', () => {
    const currentState = {
      menuItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      orderItems: [],
      customerInfo: null
    };
    const action = { type: 'ADD_ITEM', id: 1001 };
    const nextState = {
      menuItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      orderItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      customerInfo: null
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('should deal with SUBMIT order', () => {
    const currentState = {
      menuItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      orderItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      customerInfo: null
    };
    const action = {
      type: 'SUBMIT_ORDER',
      name: 'Chuck Hagy',
      phone: '555-555-5555',
      address: '123 Main St'
    };
    const nextState = {
      menuItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      orderItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      customerInfo: {
        name: 'Chuck Hagy',
        phone: '555-555-5555',
        address: '123 Main St'
      }
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('should deal with CLOSING order form', () => {
    const currentState = {
      menuItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      orderItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      customerInfo: null
    };
    const action = {
      type: 'CLOSE_ORDER',
      customerInfo: null,
      orderItems: []
    };
    const nextState = {
      menuItems: [
        {
          id: 1001,
          name: 'Royale with Cheese',
          price: 8.99,
          imagePath: 'img/burger.jpg'
        }
      ],
      orderItems: [],
      customerInfo: null
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
