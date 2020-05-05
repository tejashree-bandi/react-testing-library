import React from 'react'

const Child = (props) => {
    return (
      <button data-testid="child-button" onClick={props.onClick}>
        {props.value}
      </button>
    )
}

export default Child;
