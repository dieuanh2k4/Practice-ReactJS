import { useStore, actions } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const handleSubmit = () => {
    dispatch(actions.addTodo(todoInput));
  };

  console.log(todos);

  return (
    <div style={{ padding: 32 }}>
      <input
        value={todoInput}
        placeholder="Enter todo./..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}

export default App;
