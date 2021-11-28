import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

export default function TodoList( props ) {
  return (
    <div className="TodoList">
      <ul>
        {
          props.todos.map( todo => (
            <TodoItem key={ todo.text } text={ todo.text }/>
          ) )
        }
      </ul>
    </div>
  )
}
