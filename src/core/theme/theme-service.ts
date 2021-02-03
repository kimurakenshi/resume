export const THEME_SESSION_STORAGE_KEY = 'sg_resume_theme';

export enum Theme {
  DARK,
  LIGHT,
}

export const initializeTheme = (): Theme => {
  const userStoredTheme = getCurrentTheme();

  if (!userStoredTheme) {
    setCurrentTheme();
  }

  return getCurrentTheme();
};

const isValidTheme = (value) => Object.values(Theme).indexOf(value) !== -1;

export const getCurrentTheme = (): Theme | undefined => {
  try {
    const storedThemeValue: number = parseInt(
      window.localStorage.getItem(THEME_SESSION_STORAGE_KEY),
      0
    );

    if (!isValidTheme(storedThemeValue)) {
      return undefined;
    }

    return storedThemeValue;
  } catch {
    return undefined;
  }
};

export const setCurrentTheme = (theme = Theme.DARK) => {
  const userStoredTheme = getCurrentTheme();

  if (!userStoredTheme || userStoredTheme !== theme) {
    console.log('theme', theme.toString());
    window.localStorage.setItem(THEME_SESSION_STORAGE_KEY, theme.toString());
  }

  if (theme === Theme.DARK) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const switchTheme = (): Theme => {
  const userStoredTheme = getCurrentTheme();

  setCurrentTheme(userStoredTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK);

  return getCurrentTheme();
};
