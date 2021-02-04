import { useContext } from 'react';
import classNames from 'classnames';
import { switchTheme, Theme } from '../../theme';
import { appContext } from '../../state';
import { THEME_ACTION_TYPES } from '../../state/actions';

const ThemeSwitcher = () => {
  const { state, dispatch } = useContext(appContext);

  const onSwitchThemeHandler = () => {
    const currentTheme = switchTheme();

    dispatch({ type: THEME_ACTION_TYPES.SWITCH_THEME, payload: currentTheme });
  };

  return (
    <div
      role="button"
      className={classNames(
        'cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transform transition duration-200 ease-in-out',
        {
          'hover:text-yellow-200': state.theme === Theme.DARK,
          'hover:text-blue-600': state.theme === Theme.LIGHT,
        }
      )}
      onClick={onSwitchThemeHandler}
      style={{ height: '25px', width: '25px' }}
    >
      {state.theme === Theme.DARK ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </div>
  );
};

export default ThemeSwitcher;
