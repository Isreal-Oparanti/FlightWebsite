import React from 'react'

function Input({type, name,label, placeholder, className, id, defaultChecked,onChange}){
   return (
       <React.Fragment>
          {/* {label && <label>{label}</label>} */}
          <input 
             type={type}
             name={name}
             className={className}
             id={id}
             defaultChecked={defaultChecked}
             onChange={onChange}
          />
       </React.Fragment>
   )
} 
export default Input;