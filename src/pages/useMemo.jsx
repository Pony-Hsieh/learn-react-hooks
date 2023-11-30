/** 筆記
  - dependencies 沒變就不重新執行 function
 */

/** 測試方式
  - 分別在頁面上顯示 memoizedAddValue, addValue，並修改 text in useMemoPractice 的值，觀察看看 render 的情形
 */

import { useState, useMemo } from 'react';

function useMemoPractice() {
  console.log('render useMemoPractice');
  const [text, setText] = useState('');
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);

  function computeExpensiveValue(a, b) {
    console.log('compute expensive value');
    return a + b;
  }

  const memoizedAddValue = useMemo(
    () => computeExpensiveValue(num1, num2),
    [num1, num2]
  );

  function num1ChangeHandler(e) {
    let newVal = 0;
    if (e.target.value !== '') {
      newVal = parseInt(e.target.value, 10);
    }
    setNum1(newVal);
  }

  function textChangeHandler(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h2>useMemo</h2>

      <p>value = num1 + 1</p>
      {/* <p>memoizedAddValue: {memoizedAddValue}</p> */}
      <p>addValue: {computeExpensiveValue(num1, num2)}</p>

      <div>
        <h3>modify num1</h3>
        <input type="number" value={num1} onChange={num1ChangeHandler} />
      </div>

      <div>
        <h3>text in useMemoPractice: {text}</h3>
        <input type="text" value={text} onChange={textChangeHandler} />
      </div>
    </div>
  );
}

export default useMemoPractice;
