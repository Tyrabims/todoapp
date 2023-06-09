import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./Todo";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { LOCALSTORAGE_TODOS } from "../utils/constants";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const EachTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCompleted = (id: number) => {
    const newCompletedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completeTodo: !todo.completeTodo } : todo
    );
    setTodos(newCompletedTodos);
    localStorage.setItem(LOCALSTORAGE_TODOS, JSON.stringify(newCompletedTodos));
  };

  const handleDeleted = (id: number) => {
    const newDeletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newDeletedTodos);
    localStorage.setItem(LOCALSTORAGE_TODOS, JSON.stringify(newDeletedTodos));
  };

  const handleEdit = (event: React.SyntheticEvent, id: number) => {
    event.preventDefault();
    const newEditedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: editTodo } : todo
    );
    setTodos(newEditedTodos);
    localStorage.setItem(LOCALSTORAGE_TODOS, JSON.stringify(newEditedTodos));
    setEdit(false);
  };

  return (
    <>
      <form
        className="each_todo"
        onSubmit={(event) => handleEdit(event, todo.id)}
      >
        <div
          style={{
            color: "white",
            backgroundColor: "blue",
            marginLeft: 25,
            marginRight: 480,
            marginBottom: 10,
            padding: 15,
            paddingLeft: 15,
            borderBottom: 20,
          }}
        >
          {edit ? (
            <input
              value={editTodo}
              className="each_todo_"
              onChange={(event) => setEditTodo(event.target.value)}
            />
          ) : todo.completeTodo ? (
            <s className="each_todo_" style={{ paddingRight: 900 }}>
              {todo.todo}
            </s>
          ) : (
            <span className="each_todo_" style={{ paddingRight: 900 }}>
              {todo.todo}
            </span>
          )}

          <span
            className="icon"
            onClick={() => {
              if (!edit && !todo.completeTodo) {
                setEdit(!edit);
              }
            }}
          >
            <AiOutlineEdit />
          </span>
          <span className="icon" onClick={() => handleCompleted(todo.id)}>
            <MdDone />
          </span>
          <span className="icon" onClick={() => handleDeleted(todo.id)}>
            <AiOutlineDelete />
          </span>
        </div>
      </form>
    </>
  );
};

export default EachTodo;
