/**
 * 先做新增、刪除就好，剩下的之後再優化即可
 * 先做到能新增
 */

import { useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DOMPurify from 'dompurify';
import { ACTIONS } from './type.js';
import Todo from './Todo';

class NewTodo {
  todoContent;
  done = false;
  id = uuidv4();
  constructor(content) {
    this.todoContent = content;
  }
}

// 我們要在 reducer 裡面做運算，並 return 新的狀態
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      return [new NewTodo(action.payload.todoContent), ...state];
    }
    case ACTIONS.DELETE: {
      return state.filter((eachTodo) => eachTodo.id !== action.payload.id);
    }
    default: {
      throw new Error();
    }
  }
}

function useReducerTodo() {
  // useReducer 的第三個參數是一個可選值，用於懶建立 state 的函數
  const [todos, setTodos] = useReducer(reducer, []);
  const [todoContent, setTodoContent] = useState('');

  function textChangeHandler(e) {
    setTodoContent(e.target.value);
  }

  function addTodo() {
    // Step: 檢查是否為空值
    if (todoContent === '') {
      return;
    }

    // Step: 檢查是否有惡意內容
    // 惡意內容範例： <script>alert(1)</script>
    const cleanTodoContent = DOMPurify.sanitize(todoContent);
    if (cleanTodoContent === '') {
      setTodoContent('');
      return;
    }

    setTodos({
      type: ACTIONS.ADD,
      payload: {
        todoContent: cleanTodoContent,
      },
    });
    setTodoContent('');
  }

  return (
    <div className="useReducerPractice">
      <h2>useReducer demo todolist</h2>

      <label htmlFor="todoInput">
        <input
          id="todoInput"
          type="text"
          value={todoContent}
          placeholder="新增一筆待辦事項"
          onChange={textChangeHandler}
        />
        <button type="button" onClick={addTodo}>
          新增
        </button>
      </label>

      <ul>
        {todos.map((eachTodo) => (
          <li key={eachTodo.id} style={{ display: 'flex' }}>
            <Todo eachTodo={eachTodo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default useReducerTodo;
