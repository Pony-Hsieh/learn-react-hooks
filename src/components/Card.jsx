import { memo } from 'react';
import { isEqual } from 'lodash-es';

function compareObjAreEqual(prevProps, nextProps) {
  return isEqual(prevProps, nextProps);
}

function Card({ title, content }) {
  console.log(`render Card, ${title}, ${content}`);
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

const MemoCard = memo(Card);

// 於第 2 個參數傳入自定義的 compare function
// const MemoCard = memo(Card, compareObjAreEqual);

export { Card, MemoCard };
