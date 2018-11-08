import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (e) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: e.target.value
})

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SEARCH',
    payload: request
  }
}

export const addTodo = (description) => {
  return (dispatch) => {
    axios.post(URL, { description })
      .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
      .then(resp => dispatch(search()))
  }
}

export const markConcluir = (todo) => {
  return (dispatch) => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => dispatch(search()))
  }
}

export const markPendente = (todo) => {
  return (dispatch) => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => dispatch(search()))
  }
}

export const removeTodo = (todo) => {
  return (dispatch) => {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => dispatch(search()))
  }
}