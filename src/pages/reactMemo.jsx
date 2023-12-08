/** 筆記
  - 只要 props 沒變，就不會重新渲染
  - props 的比對方式，如果沒有傳入自定義的 compare function，那就會採用 shallow comparison
    如果傳入自定義的 compare function，該 function 可以接受兩個參數： oldProps, newProps
 */

import { useState, useCallback } from 'react';
import { Card, MemoCard } from '../components/Card';

function ReactMemoPractice() {
  console.log('render ReactMemoPractice');

  const [text, setText] = useState('');

  function textChangeHandler(e) {
    setText(e.target.value);
  }

  function sayHello() {
    console.log('Hello');
  }
  const memoSayHello = useCallback(sayHello, []);

  return (
    <div>
      <h2>memo</h2>

      <div>
        <h3>
          text in ReactMemoPractice:
          <br />
          {text}
        </h3>
        <input type="text" value={text} onChange={textChangeHandler} />
      </div>

      {/* <Card title={'card title'} content={'card content'} />
      <MemoCard title={'card title 2'} content={'card content 2'} /> */}

      {/* <Card title={'card title'} content={'card content'} sayHello={sayHello} />
      <MemoCard
        title={'card title 2'}
        content={'card content 2'}
        sayHello={sayHello}
      /> */}

      <Card
        title={'card title'}
        content={'card content'}
        sayHello={memoSayHello}
      />
      <MemoCard
        title={'card title 2'}
        content={'card content 2'}
        sayHello={memoSayHello}
      />
    </div>
  );
}

export default ReactMemoPractice;
