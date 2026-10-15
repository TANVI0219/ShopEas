import { useReducer } from "react"
function reducer(state, action) {
  if (action === "increment") return state + 1;
  if (action === "decrement") return state - 1;
  if (action === "reset") return 0;
  return state;
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default App;