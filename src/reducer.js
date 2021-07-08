export const initialState = {
  basket: [],
  user: null,
<<<<<<< HEAD
=======
  items: [],
>>>>>>> 2050573 (Next update)
};

//selector

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseFloat(item.price) + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Product ID Doesn't EXIST!!!!");
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

<<<<<<< HEAD
=======
    case "ADD_TO_ITEMS":
      return {
        ...state,
        items: [...state.items, action.unit],
      };
    case "EMPTY_ITEMS":
      return {
        ...state,
        items: [],
      };

>>>>>>> 2050573 (Next update)
    default:
      return state;
  }
};

export default reducer;
