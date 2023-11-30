import { useState } from "react";

/** onClick 事件記這 3 種模式
  // 🚩 Wrong: calls the handler during render
  return <button onClick={handleClick()}>Click me</button>

  // ✅ Correct: passes down the event handler
  return <button onClick={handleClick}>Click me</button>

  // ✅ Correct: passes down an inline function
  return <button onClick={(e) => handleClick(e)}>Click me</button>
 */

function useStatePractice() {
  const [num, setNum] = useState(0);

  function createTest() {
    console.log("createTest");
  }

  const [test, setTest] = useState(createTest);

  // 如果初始 state 需要複雜的邏輯運算，你可以傳入一個 init function 給 useState，init function 只會在初始 render 時被調用
  const [large, setLarge] = useState(() => {
    // const initialState = someExpensiveComputation(props);
    const init = 1;
    return init;
  });

  function clickHandler() {
    // React may call your updaters twice in development to verify that they are pure.
    setNum((prev) => {
      console.log(`prev: ${prev}`);
      return prev + 1;
    });
    console.log(`num: ${num}`);

    setNum((prev) => {
      console.log(`prev: ${prev}`);
      return prev + 1;
    });
    console.log(`num: ${num}`);

    setNum((prev) => {
      console.log(`prev: ${prev}`);
      return prev + 1;
    });
    console.log(`num: ${num}`);

    /** 輸出：
      prev: 0
      num: 0
      num: 0
      num: 0
      prev: 1
      prev: 2
    */
  }

  return (
    <div>
      <h2>useState</h2>
      <p>num: {num}</p>
      <p>test: {test === undefined ? "true" : "false"}</p>
      <button type="button" onClick={clickHandler}>
        num add 1
      </button>
    </div>
  );
}

export default useStatePractice;
