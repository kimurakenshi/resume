import { LAYOUT_ACTION_TYPES } from '../actions';

type LayoutAction = {
  payload: boolean;
  type: LAYOUT_ACTION_TYPES;
};

const layoutReducer = (state: boolean, action: LayoutAction) => {
  switch (action.type) {
    case LAYOUT_ACTION_TYPES.SET_INTRO_PAGE_LOADED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default layoutReducer;
