import React from 'react'
import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


export default function TodoItem( { text } ) {
  return (
    <li className="TodoItem">
      <span>C</span>
      <p>{ text }</p>
      <FontAwesomeIcon icon={faTrashAlt} />
    </li>
  )
}
