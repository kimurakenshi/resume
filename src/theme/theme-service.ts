export const THEME_SESSION_STORAGE_KEY = 'sg_resume_theme';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export const initializeTheme = () => {
  const userStoredTheme = localStorage.getItem(THEME_SESSION_STORAGE_KEY);

  setCurrentTheme(Theme[userStoredTheme]);
};

export const setCurrentTheme = (theme = Theme.DARK) => {
  const userStoredTheme = localStorage.getItem(THEME_SESSION_STORAGE_KEY);

  if (!userStoredTheme || userStoredTheme !== theme) {
    localStorage.setItem(THEME_SESSION_STORAGE_KEY, theme);
  }

  if (theme === Theme.DARK) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const switchTheme = () => {
  const userStoredTheme = localStorage.getItem(THEME_SESSION_STORAGE_KEY);

  setCurrentTheme(userStoredTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
};
