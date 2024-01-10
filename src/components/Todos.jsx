import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([{ value: "ahmed", disabled: true }]);
  const [value, setValue] = useState("");

  const addTodos = () => {
    setTodos([...todos, { value }]);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodos}>Add todo</button>
      <br />
      <ul>
        {todos.map((v, i) => (
          <li key={i}>
            <input
              defaultValue={v.value}
              type="text"
              disabled={v.disabled}
              onChange={(e) => (v.value = e.target.value)}
            />
            <button
              onClick={() => {
                const updatedTodos = [...todos];
                updatedTodos[i] = { ...v, disabled: false };
                setTodos(updatedTodos);
              }}
            >
              Edit
            </button>

            <button
              onClick={() => {
                const oldTodos = [...todos];
                oldTodos.splice(i, 1);
                setTodos(oldTodos);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
