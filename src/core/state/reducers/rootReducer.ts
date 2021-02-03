import themeReducer from './themeReducer';

const rootReducer = ({ theme }, action) => ({
  theme: themeReducer(theme, action),
});

export default rootReducer;
