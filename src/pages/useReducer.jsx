import { useState, useReducer } from 'react';

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('請傳入 action.type');
  }
}

function useReducerPractice() {
  // useReducer 的第三個參數是一個可選值，用於懶建立 state 的函數
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = {
    a: 1,
  };

  return (
    <div className="useReducerPractice">
      <h2>useReducer</h2>
      Count: {state.count}
      <br />
      <button
        onClick={() => dispatch({ type: 'decrement', payload: { data: data } })}
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: 'increment', payload: { data: data } })}
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: 'reset', payload: { data: data } })}
      >
        reset
      </button>
    </div>
  );
}

export default useReducerPractice;
