// eslint-disable-next-line no-unused-vars
import React from 'react'

const TextField = (props) => {
  return (
        <div>
            <label

            htmlFor={props.htmlfor}

            >
             {props.title}
                </label>

            <input

             placeholder={props.placeholder}
             id={props.id}
             type={props.type}
             name={props.name}
             value={props.value}
             onChange={props.onchange}

            ></input>

        </div>
  )
}

export default TextField
