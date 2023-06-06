import React from 'react'
import { Todo } from './Todo';
import EachTodo from './EachTodo';


interface TodosProps{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}: TodosProps) => {

  const clearTodos =() => {
    setTodos([])
  }

  return (
    <>
    <div>
      {todos.map((todo) => (
  <EachTodo 
  todo={todo} 
  key={todo.id}
  todos={todos}
  setTodos={setTodos}
  />
))}
    
    </div>
    <div>
    <button className='d-grid gap-2 d-md-block col-3 mx-auto btn btn-secondary' 
    onClick={() => clearTodos()} type='button' style={{marginTop:100 }}>Clear</button>
  </div>
  </>
  )
}

export default TodoList