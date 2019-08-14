import React from "react"

const Form = ({ handleSubmit, handleChange, newTodo }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          name="newTodo"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </>
  )
}

export default Form
