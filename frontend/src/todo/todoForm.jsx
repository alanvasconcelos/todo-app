import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { changeDescription, search, addTodo } from '../main/todoActions'

class TodoForm extends React.Component {
  
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    return (
      <div role="form" className="todoForm">
        <div className="row">
          <div className="col-sm-9">
            <input id="description" className="form-control" placeholder="Adicione uma tarefa" value={this.props.description} onChange={this.props.changeDescription} />
          </div>
          <div className="col-sm-3">
            <IconButton classButton='primary' value='Add' onClick={() => this.props.addTodo(this.props.description) }/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  description: state.todo.description
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ changeDescription, search, addTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)