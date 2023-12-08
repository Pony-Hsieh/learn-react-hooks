import { useContext } from 'react';

import { AuthContext, ThemeContext } from './Contexts';
import Component3 from './Component3';

function Component2() {
  console.log('render Component2');

  const authCtx = useContext(AuthContext);
  console.log('authCtx in Component2', authCtx);
  const themeCtx = useContext(ThemeContext);
  console.log('themeCtx in Component2', themeCtx);

  return (
    <>
      <h3>Component 2</h3>
      <button
        type="button"
        onClick={() => {
          authCtx.onLoggedIn();
        }}
      >
        登入
      </button>
      <button
        type="button"
        onClick={() => {
          authCtx.onLoggedOut();
        }}
      >
        登出
      </button>

      {authCtx.isLoggedIn ? <Component3 /> : null}
    </>
  );
}

export default Component2;
