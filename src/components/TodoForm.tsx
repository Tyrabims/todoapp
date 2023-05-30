import React, { ChangeEvent, MouseEvent, FormEvent, SyntheticEvent } from "react";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleClick: (event: React.SyntheticEvent) => void;
}

const TodoForm = ({ todo, setTodo, handleClick }: Props) => {
  //  const handleClick = (event:MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();

  // }

  
  return (
    <div>
      <h1>Tasks to be done</h1>
      <form className="input-group mb-3" onSubmit={(event) => handleClick(event)}>
        <input
          type="text"
          value={todo}
          onChange={event => setTodo(event.target.value)}
          className="form-control"
          placeholder="Enter New todo"
        />
        <button
          className="btn btn-outline-secondary btn-info"
          type="submit"    
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
