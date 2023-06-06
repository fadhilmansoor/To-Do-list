import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: todo,
        status: false
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodo('');
    }
  };

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
    });
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(obj.id)}
                checked={obj.status}
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() =>
                  setTodos((prevTodos) =>
                    prevTodos.filter((todo) => todo.id !== obj.id)
                  )
                }
              ></i>
            </div>
          </div>
        ))}
        <h1>Active Tasks</h1>
        {todos
          .filter((obj) => obj.status)
          .map((obj) => (
            <h1 key={obj.id}>{obj.text}</h1>
          ))}
      </div>
    </div>
  );
}

export default App;
