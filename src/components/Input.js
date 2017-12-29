import React from 'react'

const Input = (props) => (
  <div>
    <label className='form-label'>
      {props.label}
    </label>

    <input
      type={props.type}
      name={props.name}
      id={props.id}
      className='form-control'      
      placeholder='.....'
      ref={props.inputRef} />

    <br />
  </div>
)

export default Input
