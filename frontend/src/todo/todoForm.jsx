import React from 'react'

export default props => (
  <div role="form" className="todoForm">
    <div className="row">
      <div className="col-sm-9">
        <input id="description" className="form-control" placeholder="Adicione uma tarefa"/>
      </div>
      <div className="col-sm-3">
        <button className="btn btn-primary"><b>+</b></button>
      </div>
    </div>
  </div>
)