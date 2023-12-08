/** 觀察
  透過 Component2 的登入、登出按鈕變更 isLoggedIn 的值，看看哪些 component 會被重新渲染
  (可以先按登入，再按登出，因為 isLoggedIn 初始值為 false，按下登出不會造成 isLoggedIn 的值的變化)

  可以觀察到，整個 Provider 內的元件都會被重新渲染，即使沒有使用相關 data 去 render 的 component 也一樣
 */

import { useState } from 'react';
import { ThemeContext, AuthContext } from './Contexts';
import Component1 from './Component1';

function BasicContextDemo() {
  console.log('render BasicContextDemo');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState('dark');

  function onLoggedIn() {
    console.log('onLoggedIn');
    setIsLoggedIn(true);
  }
  function onLoggedOut() {
    console.log('onLoggedOut');
    setIsLoggedIn(false);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          onLoggedIn,
          onLoggedOut,
        }}
      >
        <Component1 />
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default BasicContextDemo;
