import { ACTIONS } from './type.js';

/* Todo 的元件 */
export default function Todo({ eachTodo, setTodos }) {
  return (
    <>
      <p
        style={{
          textDecoration: eachTodo.done ? 'line-through' : null,
        }}
      >
        {eachTodo.todoContent}
      </p>
      {/* <button type="button">完成</button> */}
      <button
        type="button"
        onClick={() =>
          setTodos({
            type: ACTIONS.DELETE,
            payload: {
              ...eachTodo,
            },
          })
        }
      >
        刪除
      </button>
    </>
  );
}
