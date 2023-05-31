import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './Todo';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md';
import TodoForm from './TodoForm';


interface Props{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const EachTodo = ({todo, todos, setTodos}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  
  useEffect(() => {
      inputRef.current?.focus()
  }, [edit])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleCompleted = (id:number) => {
    setTodos(todos.map((todo) => (todo.id === id ? {...todo, completeTodo:!todo.completeTodo} : todo)
      )
    )
  };
 
  const handleDeleted = (id:number) => {
      setTodos(todos.filter((todo) => todo.id !== id))
  };

  const handleEdit = (event:React.SyntheticEvent, id: number) => {
      event.preventDefault();
      setTodos(todos.map((todo) => (
        todo.id === id ? {...todo,todo : editTodo} : todo ))
      );
       setEdit(false);
  }
 
  return (
    <>
      <form className='each_todo' onSubmit={(event) => handleEdit(event, todo.id)}> 
      <div style={{color:'white', backgroundColor: 'blue', marginLeft: 25, marginRight: 480, marginBottom: 10, padding: 15, paddingLeft: 15, borderBottom: 20}}>
         {
          edit ? (
              <input value={editTodo} className="each_todo_" onChange={(event) => setEditTodo(event.target.value)}/>
          ): (
            todo.completeTodo ? (
              <s className="each_todo_" style={{paddingRight: 900}}>{todo.todo}</s>
               ) : (
              <span className="each_todo_" style={{paddingRight: 900}}>{todo.todo}</span> 
              )
                  )
         }
         
         
            <span className='icon' onClick = {() => {
              if(!edit && !todo.completeTodo) {
                setEdit(!edit);
              }
            }}
            >
              <AiOutlineEdit />
            </span>
            <span className='icon' onClick={() => handleCompleted(todo.id)}> 
              <MdDone/>
            </span>
            <span className='icon' onClick={() => handleDeleted(todo.id)}>
              <AiOutlineDelete />
            </span>
            </div> 
    </form>
    </>
  )
}

export default EachTodo