// import { AuthContext } from './AuthContext';
import Component2 from './Component2';

function Component1() {
  console.log('render Component1');

  // const authCtx = useContext(AuthContext);
  // console.log('authCtx in Component1', authCtx);

  return (
    <>
      <h3>Component 1</h3>
      <Component2 />
    </>
  );
}

export default Component1;
