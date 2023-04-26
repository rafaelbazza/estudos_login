// eslint-disable-next-line no-unused-vars
import React from 'react'

const TextField = (props) => {
  return (
    <div>
      <div>
        <label

          htmlFor={props.htmlfor}

        >
          {props.title}
        </label>
      </div>
      <div>
        <input

          placeholder={props.placeholder}
          id={props.id}
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onchange}
          required

        ></input>
      </div>

    </div>
  )
}

export default TextField
