import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoForm from "./components/TodoForm";
import { Todo } from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        { id: Date.now(), todo, completeTodo: false, deleteTodo: false },
      ]);
      setTodo("");
    }
  };

  return (
    <>
      <TodoForm todo={todo} setTodo={setTodo} handleClick={handleClick} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
