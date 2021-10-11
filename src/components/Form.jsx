import React from 'react'


export default function Form({input, todos, setTodos, setInput, setFilter, filter, setFilteredArr}) {
    return (
        <div className="mainForm">
            <div className="form">
            <input type="text" placeholder="enter new task" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button onClick={()=>{
                setTodos([...todos, {task:input, id:Math.random()*1000, complited:false}])
                setInput("")
            }}>Add</button>
            </div>
            <div className="filter">
                <select name="filter" id="" onChange={(e)=>{setFilter(e.target.value)
                                                        setFilteredArr(todos.filter(el=>el.complited !== filter))}}>
                    <option  defaultValue value="all">All</option>
                    <option value="complited">Complited</option>
                    <option value="uncomplited">Uncomplited</option>
                </select>
            </div>
        </div>
    )
}
