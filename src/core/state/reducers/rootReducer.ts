import themeReducer from './themeReducer';
import layoutReducer from './layoutReducer';

const rootReducer = ({ theme, hasIntroPageLoaded }, action) => ({
  theme: themeReducer(theme, action),
  hasIntroPageLoaded: layoutReducer(hasIntroPageLoaded, action),
});

export default rootReducer;
