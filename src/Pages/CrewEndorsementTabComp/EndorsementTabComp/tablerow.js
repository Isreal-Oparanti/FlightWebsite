import React from 'react'
function Cockpit({state}){
    console.log(state)
          return (
            
             <>
             {  state.endorse.map((ele,index) =>{
                   return <tr key={index} id='passportTablerow'>
                        <td>{ele.endorsement}</td>
                        <td>{ele.cockpit?<input type='checkbox'  defaultChecked={true}/>: ''}</td>
                        <td>{ele.cabin?<input type='checkbox'  defaultChecked={true} />: ''}</td>
                        <td>{ele.ground?<input type='checkbox'  defaultChecked={true}/>: ''}</td>
                        <td>{ele.maintanance?<input type='checkbox'  defaultChecked={true}/>: ''}</td>
                        <td id='aircraftType'>{ele.aircraftType}</td>
                        <td>{ele.endorsementType}</td>
                   </tr>         
             })}
             </> 
        )
     }
export default Cockpit;
 