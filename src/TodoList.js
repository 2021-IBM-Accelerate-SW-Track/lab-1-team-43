import React from 'react'
import Todo from './Todo'

export default function TodoList({todos}) {
    return (
        //creating a new array for each todos and string them in their own <Todo/>
        todos.map(todo => {
            return <Todo key={todo.name} todo={todo} />
        })
    )
}
