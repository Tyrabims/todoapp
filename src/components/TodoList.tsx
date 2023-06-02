import React from 'react'
import { Todo } from './Todo';
import EachTodo from './EachTodo';


interface TodosProps{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}: TodosProps) => {

const clearTodos =() => {setTodos([])}
  return (
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
  )
}

export default TodoList