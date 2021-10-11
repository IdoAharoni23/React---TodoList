import React from 'react'

export default function Item({todo, todos, setTodos}) {
    return (
        <div className="task" >
            <h3 className={todo.complited?"done": ""}>
                todo:
                <br />
                <span>{todo.task}</span></h3>
            <button className="comp" onClick={()=>{
                setTodos(todos.map(el=>{
                    if (el.id ===todo.id) {
                        return {task:el.task, id:el.id, complited:!el.complited}
                    }
                    return el
                }))
            }}>Comp</button>
            <button className="del" onClick={()=>{setTodos(todos.filter(el=>el.id !==todo.id))}}>Del</button>
        </div>
    )
}
