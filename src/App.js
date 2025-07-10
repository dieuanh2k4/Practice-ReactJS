import { useRef } from "react";
import { useStore, actions } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));

    inputRef.current.focus();
  };

  console.log(todos);

  return (
    <div style={{ padding: 32 }}>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo./..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <span onClick={() => dispatch(actions.deleteTodo())}>&times;</span>
        </li>
      ))}
    </div>
  );
}

export default App;
