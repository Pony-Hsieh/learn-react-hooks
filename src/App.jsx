import { useState } from 'react';

// import UseStatePractice from "./pages/useState";
// import UseEffectPractice from "./pages/useEffect";
// import UseMemoPractice from './pages/useMemo';
// import UseCallbackPractice from "./pages/useCallback";
// import ReactMemoPractice from './pages/reactMemo';
// import UseRefPractice from './pages/useRef';
// import UseReducerPractice from './pages/useReducer';
import UseReducerTodo from '../src/useReducerTodo/index';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Learn React Hooks</h1>

      {/* <UseStatePractice /> */}
      {/* <UseEffectPractice /> */}
      {/* <UseMemoPractice /> */}
      {/* <UseCallbackPractice /> */}
      {/* <ReactMemoPractice /> */}
      {/* <UseRefPractice /> */}
      {/* <UseReducerPractice /> */}
      <UseReducerTodo />
    </>
  );
}

export default App;
