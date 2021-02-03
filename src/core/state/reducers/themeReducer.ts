import { Theme } from '../../theme/theme-service';
import { THEME_ACTION_TYPES } from '../actions';

type ThemeAction = {
  payload: Theme;
  type: THEME_ACTION_TYPES;
};

const themeReducer = (state: Theme, action: ThemeAction) => {
  switch (action.type) {
    case THEME_ACTION_TYPES.SWITCH_THEME: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
