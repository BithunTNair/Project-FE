import React from 'react'
import './Input.css'

function Input({ type, value, onblur, onchange, label ,name}) {
    return (
        <div className='common-input-container'>
            <input required className='common-input' type={type} name={name} value={value} onChange={onchange} onBlur={onblur} />
            <label htmlFor="">{label}</label>
        </div>
    )
}

export default Input