import { useState, useEffect } from 'react';

// 自定義 Hook
function useKeyDown() {
  const [keyDown, setKeyDown] = useState('');

  function keyDownHandler(event) {
    console.log('keyDownHandler');
    setKeyDown(event.key);
  }

  useEffect(() => {
    console.log('asdasd');
    document.addEventListener('keydown', keyDownHandler);

    // return cleanup function
    return function () {
      document.removeEventListener('keydown', keyDownHandler);
      setKeyDown('');
    };
  }, []);

  return keyDown;
}

function Page() {
  const keyDown = useKeyDown();

  return (
    <div>
      <p>page</p>
      <p>{keyDown}</p>
    </div>
  );
}
export default Page;
