import React, {useState} from 'react';
 function Data(props){   
    const {craft,checked, Default } = props.item;
       return (
                <div>
                    <div className="endorse1" > 
                        <div>
                            <span style={{marginRight: '6px'}}>
                             <input 
                                type='checkbox' 
                                value={craft}  
                                onChange={props.handleChange} 
                                defaultChecked={checked}
                             />
                            </span>
                        </div>
                        <div style={{ width: '35px'}}>{craft}</div>
                         
                    </div>
               </div>
       )
     }     
export default Data;


 