// eslint-disable-next-line no-unused-vars
import React from 'react'

const TextField = ({ placeholder = 'any', id, type = 'text', name, value, onChange, htmlFor, title }) => {
  return (
    <div>
      <div>
        {title && (
        <label
          htmlFor={htmlFor}

        >
          {title}
        </label>
        )}

      </div>
      <div>
        <input

          placeholder={placeholder}
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required

        ></input>
      </div>

    </div>
  )
}

export default TextField
