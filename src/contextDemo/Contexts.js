import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: null,
  onLoggedIn: null,
  onLoggedOut: null,
});

const ThemeContext = createContext('light');

export { ThemeContext, AuthContext };
