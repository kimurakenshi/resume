import { createContext, Dispatch } from 'react';
import { Theme } from '../theme';

export type InitialStateType = {
  theme: Theme;
  hasIntroPageLoaded: boolean;
};

export const initialState: InitialStateType = {
  theme: Theme.DARK,
  hasIntroPageLoaded: false,
};

const context = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export default context;
