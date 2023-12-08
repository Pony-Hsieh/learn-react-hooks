// import { useContext } from 'react';
// import AuthContext from './AuthContext';

function Component3() {
  console.log('render Component3');

  // const authCtx = useContext(AuthContext);
  // console.log('authCtx in Component3', authCtx);

  return (
    <>
      <h3>Component 3</h3>
      <p>登入才會顯示</p>
    </>
  );
}

export default Component3;
