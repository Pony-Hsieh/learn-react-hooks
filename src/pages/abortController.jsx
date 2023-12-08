import { useEffect } from 'react';
import axios from 'axios';

async function getJSON(url) {
  if (!url) {
    throw new Error('請輸入要 fetch 資料的 url');
  }
  const response = await fetch(url);
  const JSON = await response.json();
  console.log(JSON);
}

function AbortControllerPractice() {
  console.log('render AbortControllerPractice');

  const abortController = new AbortController();
  const { signal } = abortController;

  function fetchVideo() {
    // console.log('fetchVideo');
    console.warn('123', abortController.signal.aborted);

    try {
      axios.get('https://mdn.github.io/dom-examples/abort-api/sintel.mp4', {
        signal,
      });
    } catch (err) {
      console.log(err);
    }
  }

  function cancelFetchVideo() {
    console.log('cancelFetchVideo');
    abortController.abort();
  }

  return (
    <div>
      <h3>AbortController</h3>
      <button type="button" onClick={fetchVideo}>
        fetch video
      </button>
      <button type="button" onClick={cancelFetchVideo}>
        cancel fetch video
      </button>
    </div>
  );
}

export default AbortControllerPractice;
