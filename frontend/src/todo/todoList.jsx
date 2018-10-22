import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr>
        <td className={todo.done ? 'concluido' : ''}>{todo.description}</td>
        <td>
          <IconButton classButton='success' value='Concluir' onClick={() => props.handleConcluir(todo)} hide={todo.done} />
          <IconButton classButton='warning' value='Pendente' onClick={() => props.handlePendente(todo)} hide={!todo.done} />
          <IconButton classButton='danger' value='Del' onClick={() => props.handleRemove(todo)} hide={!todo.done} />
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