/**
 *
 */

import { useRef } from 'react';

export default function useRefPractice() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);

  const styleObj = {
    height: '600px',
    cursor: 'pointer',
  };

  function goBlock1() {
    console.log('goBlock1');
    scrollTo({
      top: block1Ref.current.offsetTop,
      behavior: 'smooth',
    });
  }
  function goBlock2() {
    console.log('goBlock2');
    scrollTo({
      top: block2Ref.current.offsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <div style={{ ...styleObj, background: 'green' }} ref={block1Ref}>
        <button type="button" onClick={goBlock2}>
          go block 2
        </button>
      </div>
      <div style={{ ...styleObj, background: 'orange' }} ref={block2Ref}>
        <button type="button" onClick={goBlock1}>
          go block 1
        </button>
      </div>
    </div>
  );
}
