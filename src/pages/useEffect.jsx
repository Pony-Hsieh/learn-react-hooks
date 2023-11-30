/** 筆記
 * useEffect 是，只要 dependencies 使用 Object.is 比對後不同，就會重新執行 setup function
 * 如果 setup function 有 return 一個 clean up function，那這個 clean up function 會在 re-render 的時候搭配 dependencies 內的舊值執行，然後搭配 dependencies 內的新值執行 setup function
 */

/** 可以觀察的點
  1. 透過 console.log 觀察
    - set up function, clean up function 的執行時機
    - state 的 newVal, oldVal
  2. useEffect 第 2 個參數帶上不同的值(或不帶值) 會有甚麼差異
 */

import { useState, useEffect } from 'react';

function useEffectPractice() {
  const [num, setNum] = useState(1);
  const [text, setText] = useState('');
  const [flag, setFlag] = useState(false);

  function numChangeHandler(e) {
    console.log('numChangeHandler');
    const newVal = parseInt(e.target.value, 10);
    console.log('setNum with: ', newVal);
    setNum(newVal);
  }

  function textChangeHandler(e) {
    console.log('textChangeHandler');
    setText(e.target.value);
  }

  function flagChangeHandler(e) {
    console.log('flagChangeHandler');
    switch (e.target.value) {
      case '1':
        setFlag(true);
        break;
      case '0':
        setFlag(false);
        break;
      default:
        break;
    }
  }

  /** See the difference between passing:
   * 1. an array of dependencies
   * 2. an empty array
   * 3. no dependencies
   */
  useEffect(() => {
    console.log('useEffect num: ', num);

    function cleanUpFunction() {
      console.log('cleanUpFunction num: ', num);
    }

    return cleanUpFunction;
  }, [num, flag]);
  // }, []);
  // });

  return (
    <div>
      <h2>useEffect</h2>

      <p>num: {num}</p>
      <select onChange={numChangeHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <hr />

      <p>text: {text}</p>
      <input type="text" value={text} onChange={textChangeHandler} />
      <hr />

      <p>flag: {flag}</p>
      <label htmlFor="radioTrue">
        <input
          type="radio"
          id="radioTrue"
          name="true"
          value="1"
          checked={flag}
          onChange={flagChangeHandler}
        />
        <span>true</span>
      </label>
      <label htmlFor="radioFalse">
        <input
          type="radio"
          id="radioFalse"
          name="false"
          value="0"
          checked={!flag}
          onChange={flagChangeHandler}
        />
        <span>false</span>
      </label>
    </div>
  );
}

export default useEffectPractice;
