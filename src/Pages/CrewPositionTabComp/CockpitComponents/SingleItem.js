import React, {useState} from 'react';
 function Data(props){   
    const {craft,checked, Default } = props.item;
       return (
                <div>
                    <div className="Crewposition" > 
                        <div><input 
                                type='checkbox' 
                                value={craft}  
                                onChange={props.handleChange} 
                                defaultChecked={checked}
                             />
                        </div>
                        <div>{craft}</div>
                        <div><input 
                               type='checkbox' 
                               value={craft}  
                               onChange={props.handleChangeDefault} 
                               defaultChecked={Default}
                             />
                        </div>
                    </div>
               </div>
       )
     }     
export default Data;


 