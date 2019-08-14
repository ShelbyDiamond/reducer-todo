import React, { useReducer, useState } from "react"
import { initialState, reducer } from "./Reducers/Reducer"
import FormList from "./components/FormList"
import Form from "./components/Form"

function App() {
  const [newListItem, setListItem] = useState("")
  const [state, dispatch] = useReducer(itemReducer, initialState)

  const handleChange = event => {
    event.preventDefault()
    setListItem(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    dispatch({ type: "ADD_TODO", payload: newListItem })
  }
  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id })
  }
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" })
  }

  return (
    <div className="wrapper">
      <div className="todoList">
        <div className="header">
          <h1>To Do List</h1>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            newListItem={newListItem}
          />
        </div>
        <FormList
          clearCompleted={clearCompleted}
          toggleCompleted={toggleCompleted}
          toDo={state.toDo}
        />
      </div>
    </div>
  )
}

export default App
