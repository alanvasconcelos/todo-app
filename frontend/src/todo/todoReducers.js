const initial_state = { description: '', list: [] }

export const todoReducer = (state = initial_state, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    case 'TODO_SEARCH':
      return { ...state, list: action.payload.data }
    case 'TODO_ADDED':
      return { ...state, description: '' }
    default:
      return state
  }
}