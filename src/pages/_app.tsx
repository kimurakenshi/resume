import { useEffect, useReducer } from 'react';
import '../styles/globals.scss';
import { initializeTheme } from '../core/theme';
import { AppProvider, rootReducer } from '../core/state';
import { THEME_ACTION_TYPES } from '../core/state/actions';
import { initialState } from '../core/state/appContext';
import { Layout } from '../core/components';

const MyApp = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    const userTheme = initializeTheme();
    dispatch({ type: THEME_ACTION_TYPES.SWITCH_THEME, payload: userTheme });
  }, []);

  return (
    <AppProvider state={state} dispatch={dispatch}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
};

export default MyApp;
