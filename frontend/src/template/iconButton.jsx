import React from 'react'

export default props => {
  if (props.hide == true) 
  {
    return null
  }
  else
  {
    return (
      <button className={'btn btn-' + props.classButton} onClick={props.onClick}>
        {props.value}
      </button>
    )
  }
}