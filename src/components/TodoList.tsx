import React, {FC, MouseEvent} from 'react'
import { ITodo } from './interfaces'

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove: (id: number) => void
}

const TodoList: FC<TodoListProps> = ({todos, onRemove, onToggle}) => {

  const removeHandler = (event: MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  if (!todos.length) {
    return <p className="center">No todos!</p>
  }

  return (
    <ul>
        {todos.map((todo) => {
            const classes = ['todo']
            if (todo.completed) {
                classes.push('completed')
            }
            return  (
                <li className={classes.join(' ')} key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
                        <span>{todo.title}</span>
                        <i 
                            className='material-icons red-text' 
                            onClick={event => removeHandler(event, todo.id)}
                        >
                            delete
                        </i>
                    </label>
                </li>
            )
        })}
    </ul>
  )
}

export default TodoList