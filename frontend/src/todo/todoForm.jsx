import React from 'react'
import IconButton from '../template/iconButton'

export default props => (
  <div role="form" className="todoForm">
    <div className="row">
      <div className="col-sm-9">
        <input id="description" className="form-control" placeholder="Adicione uma tarefa" value={props.description} onChange={props.handleChange}/>
      </div>
      <div className="col-sm-3">
        <IconButton classButton='primary' value='Add' onClick={props.handleAdd}/>
      </div>
    </div>
  </div>
)