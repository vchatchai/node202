import React from 'react'
import PropsTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }} >
        {text}
    </li>
)


Todo.propTypes = { 
    onClick: PropsTypes.func.isRequired,
    completed: PropsTypes.bool.isRequired,
    text: PropsTypes.string.isRequired,
}
export default Todo