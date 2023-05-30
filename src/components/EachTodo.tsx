import React from 'react'
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
  const handleCompleted = (id:number) => {
    setTodos(todos.map((todo) => (todo.id === id ? {...todo, completeTodo:!todo.completeTodo} : todo)
      )
    )
  };
 
  return (
    <>
      <form className='each_todo'> 
         <div style={{color:'white', backgroundColor: 'blue', marginLeft:15, marginRight: 15, padding:15, paddingLeft: 15, borderBottom:20}}>
         <span className="each_todo_" style={{paddingRight: 710}}>{todo.todo}</span>
            <span className='icon'>
              <AiOutlineEdit />
            </span>
            <span className='icon' onClick={() => handleCompleted(todo.id)}> 
              <MdDone/>
            </span>
            <span className='icon'>
              <AiOutlineDelete />
            </span>
            
            </div> 
    </form>
    </>
  )
}

export default EachTodo