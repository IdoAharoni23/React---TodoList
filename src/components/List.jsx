import React from 'react'
import Item from './Item'



export default function List({todos, setTodos, filteredArr}) {
    return (
        <div className="list">
            {filteredArr.map(todo=><Item todo={todo} key={todo.key} todos={todos} setTodos={setTodos}></Item>)}
        </div>
    )
}
