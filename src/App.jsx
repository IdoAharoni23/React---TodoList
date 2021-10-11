import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'

export default function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("All")
  const [filteredArr, setFilteredArr] = useState([])


  const showFilterArr = ()=>{
    switch (filter) {
      case "complited":
        setFilteredArr(todos.filter(el=>el.complited === true))
        break;

      case "uncomplited":
        setFilteredArr(todos.filter(el=>el.complited === false))
        break;
  
      default:
        setFilteredArr(todos)
        break;
    }
  }


  useEffect(() => {
    showFilterArr()
    
  }, [todos, filter])

  return (
    <div className="app">
      <h1>Ido's Todo List</h1>
      <div className="form">
      <Form todos={todos} setTodos={setTodos} setInput={setInput} setFilter={setFilter} input={input} filter={filter} setFilteredArr={setFilteredArr}></Form>
      </div>
      <div className="list">
      <List todos={todos} setTodos={setTodos} filter={filter} filteredArr={filteredArr}></List>
      </div>
    </div>
  )
}
