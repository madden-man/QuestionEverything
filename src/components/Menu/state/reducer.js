import actionTypes from './actionTypes';

const initialState = {
  isMenuOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU: {
      return {
        isMenuOpen: !state.isMenuOpen,
      };
    }
    default: {
      return state;
    }
  }
};