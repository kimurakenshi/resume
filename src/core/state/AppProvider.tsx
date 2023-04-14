import AppContext from './appContext';

const AppProvider = ({ children, state, dispatch }) => (
  <AppContext.Provider value={{ state, dispatch }}>
    {children}
  </AppContext.Provider>
);

export default AppProvider;
