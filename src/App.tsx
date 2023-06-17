import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoForm from "./components/TodoForm";
import { Todo } from "./components/Todo";
import TodoList from "./components/TodoList";
import { LOCALSTORAGE_TODOS } from "./utils/constants";

// JSON.stringify: object -> string
// JSON.parse: string -> object
function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCALSTORAGE_TODOS);
    const todoList = storedTodos ? JSON.parse(storedTodos) : [];
    setTodos(todoList);
  }, []);

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!todo) return;

    const newTodoList = [
      ...todos,
      { id: Date.now(), todo, completeTodo: false, deleteTodo: false },
    ];
    setTodos(newTodoList);
    setTodo("");

    localStorage.setItem(LOCALSTORAGE_TODOS, JSON.stringify(newTodoList));
  };

  return (
    <>
      <TodoForm todo={todo} setTodo={setTodo} handleClick={handleClick} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
