export const initialState = {
  toDo: [
    {
      item: "Build a To-Do List",
      completed: false,
      id: Date.now
    }
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
      type: 'ADD_TODO':
      return {...state, toDo: state.toDo.concat({
          item: action.payload,
          completed: false,
          id: Date.now()
      })}
      type: 'TOGGLE_FINISHED':
      return {...state,
      toDo: state.toDo.map(chore => chore.id === action.payload ? {...chore, !completed: item.completed} : chore)}
      type: 'CLEAR_FINISHED': 
      return { ...state,
      toDo: state.toDo.filter(chore => !chore.completed)
      }
      default: return state
  }
}
