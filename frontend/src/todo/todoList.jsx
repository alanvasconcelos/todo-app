import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markConcluir, markPendente, removeTodo } from '../main/todoActions'

const todoList = (props) => {

  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr>
        <td className={todo.done ? 'concluido' : ''}>{todo.description}</td>
        <td>
          <IconButton classButton='success' value='Concluir' onClick={() => props.markConcluir(todo)} hide={todo.done} />
          <IconButton classButton='warning' value='Pendente' onClick={() => props.markPendente(todo)} hide={!todo.done} />
          <IconButton classButton='danger' value='Del' onClick={() => props.removeTodo(todo)} hide={!todo.done} />
        </td>
      </tr>
    ))
  }

  return (
    <table class='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => ({
  list: state.todo.list
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ markConcluir, markPendente, removeTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(todoList)