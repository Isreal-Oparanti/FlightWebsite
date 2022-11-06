import React,{ useState } from 'react'; 
import { v4 as uuidv4 } from "uuid";
import EndorseItem from './EndorseItem.js'
function Endorse({endorse}){

    const [value, setValue] = useState('')

        return(
           <div>
               <table className="PassportTable" >
				   <tr id="PassportTableHead">
				   <td>Endorsement</td>
                   <td style={{width: '140px'}}>Number</td>
				   <td style={{width: '120px'}}>Date of issue</td>
                   <td style={{width: '120px'}}>Expiry Date</td>
				   <td>Remains</td>
				   <td id='aircraftType' style={{width: '190px'}}>Notes</td>
                   <td id='aircraftType'>Scan</td>
  				</tr>
              {
                  
                  endorse.map((ele, index)=>{
                        return  <EndorseItem item={ele.id} key={index} ele={ele} endorse={endorse}/> 
                  })
              }
              </table>

           </div>
       )     
}
 export default Endorse; 