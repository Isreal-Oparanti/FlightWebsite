import React,{useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import Input from '../../components/inputs'
import CodeItem from './FlightEditComp/codeitem'
function FlightSettings(){

   const [value, setValue] = useState()
   const [code, setCode] = useState({
       codes:[
           {
             id: uuidv4(),
             value1: '',
             value2: ''
           },
           {
            id: uuidv4(),
            value1: '',
            value2: ''
          },
          {
            id: uuidv4(),
            value1: '',
            value2: ''
          },
          {
            id: uuidv4(),
            value1: '',
            value2: ''
          },
          {
            id: uuidv4(),
            value1: '',
            value2: ''
          }
            
       ]
   })

   const addCodes = () => {
    
    const newCode = {
        id: uuidv4(),
        value1: '',
        value2: ''  
   }   
       setCode({ codes:[...code.codes, newCode]});
 }
 
 
        return(
            <div className="FE">
            <fieldset>
                <legend>General settings</legend>
            
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Disable Permanent Delecting sector</label></div>
                   <div><Input type="checkbox" name="check1" defaultChecked={true}/></div>
               </div>
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Use alternate</label></div>
                   <div><Input type="checkbox" name="check1" defaultChecked={true}/></div>
               </div>
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Use alternate2</label></div>
                   <div><Input type="checkbox" name="check1" defaultChecked={true}/></div>
               </div>
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Use empty leg</label></div>
                   <div><Input type="checkbox" name="check1" defaultChecked={true}/></div>
               </div>
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Default flight type</label></div>
                   <div><select><option>S</option><option>N</option><option>G</option><option>X</option><option>M</option></select></div>
               </div>
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Default trip type</label></div>
                   <div><select><option>PAX</option><option>FLIGHT FOR OWNER</option><option>TRAINING FLIGHT</option><option>SIMULATOR</option><option>TECHNICAL</option><option>AMBULANCE</option><option>CREW PRIVATE</option><option>CARGO</option></select></div>
               </div>
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Default Rotation Time</label></div>
                   <div><Input type="text" defultvalue="01:00" id="Dtnote" name="check1"   /></div>
               </div>
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Check Airport opening hour</label></div>
                   <div><Input type="checkbox"  name="check1"  defaultChecked={true}/></div>
               </div>
               <div className="Fsettings"> 
                 <div><label htmlFor="radio1">Notify about conflicting trips</label></div>
                   <div><Input type="checkbox" name="check1" defaultChecked={true} /></div>
               </div>
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Default trip note</label></div>
                   <div><textarea type="text" className="dripNote"  name="check1" /></div>
               </div>
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Allow not completed JL to be entered</label></div>
                   <div><Input type="checkbox"  name="check1" defaultChecked={true} /></div>
               </div>
               <div className="Fsettings"> 
                   <div><label htmlFor="radio1">Auto Update Expiry Training date</label></div>
                   <div><Input type="checkbox"  name="check1" defaultChecked={true} /></div>
               </div>
               
             </fieldset>
             <fieldset>
                   <legend>
                       Jorney Log Items
                   </legend>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Distance</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Cargo</label></div>
                        <div><Input type="checkbox" name="check1" defaultChecked={true} /><label htmlFor="radio1">Block fuel</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" defaultChecked={true} /><label htmlFor="radio1">Number of Landings</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Discretion</label></div>
                        <div><Input type="checkbox" name="check1" defaultChecked={true} /><label htmlFor="radio1">Used fuel</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" defaultChecked={true} /><label htmlFor="radio1">Delay Code</label></div>
                        <div><Input type="checkbox" name="check1" defaultChecked={true}/><label htmlFor="radio1">Flown by</label></div>
                        <div><Input type="checkbox" name="check1" defaultChecked={true} /><label htmlFor="radio1">Rem fuel</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" defaultChecked={true} /><label htmlFor="radio1">PAX</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Uplift</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Deportees</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Male</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Max FL</label></div>
                        <div><Input type="checkbox" name="check1" defaultChecked={true} /><label htmlFor="radio1">TAH</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Females</label></div>
                        <div><Input type="checkbox" name="check1"  defaultChecked={true} /><label htmlFor="radio1">Notes</label></div>
                        <div><Input type="checkbox" name="check1" defaultChecked={true} /><label htmlFor="radio1">TAC</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Infants</label></div>
                        <div className="occupy2"><Input type="checkbox" name="check1" /><label htmlFor="radio1">Deicing</label></div>
                   </div>
               </fieldset>
               <fieldset>
                   <legend>
                       Ops checkout Items
                   </legend>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">ATC flight plan</label></div>
                        <div><Input type="checkbox" name="check1" defaultChecked={true}/><label htmlFor="radio1">Weather</label></div>
                        <div><Input type="checkbox" name="check1"  /><label htmlFor="radio1">Hotel</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Operational flight plan</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Runway Analysis</label></div>
                        <div><Input type="checkbox" name="check1"  /><label htmlFor="radio1">Catering</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1"  /><label htmlFor="radio1">Landing Permit</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Handling</label></div>
                        <div><Input type="checkbox" name="check1"  /><label htmlFor="radio1">Cargo</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Overflight Permit</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Crew Aware of flight</label></div>
                        <div><Input type="checkbox" name="check1"  defaultChecked={true}/><label htmlFor="radio1">PAX transport</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Slot</label></div>
                        <div><Input type="checkbox" name="check1" defaultChecked={true}/><label htmlFor="radio1">Crew transport</label></div>
                        <div><Input type="checkbox" name="check1"  /><label htmlFor="radio1">Crew Currency</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Aircraft performance</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Flight brief sent</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Hil information</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">NOTAM</label></div>
                        <div className="occupy2"><Input type="checkbox" name="check1" /><label htmlFor="radio1">GAR sent</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Block fuel</label></div>
                        <div className="occupy2"><Input type="checkbox" name="check1" /><label htmlFor="radio1">Document Printed</label></div>
                   </div>
                   {/* <div className="selectAll">    
                     <div>Select all | Select none</div>
                   </div> */}
               </fieldset>
               
               <fieldset>

                   <legend>
                       Sales Checklist Items
                   </legend>
                   <div className="Fsettings"> 
                        <div><input type="checkbox" name="check1" defaultChecked={true}/><label htmlFor="radio1">PAX List</label></div>
                        <div><input type="checkbox" name="check1" defaultChecked={true}/><label htmlFor="radio1">Flight briefing</label></div>
                        <div><input type="checkbox" name="check1" defaultChecked={true}/><label htmlFor="radio1">Catering</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1" defaultChecked={true}/><label htmlFor="radio1">Ground Transport</label></div>
                        <div><Input type="checkbox" name="check1" defaultChecked={true}/><label htmlFor="radio1">Contract Signed</label></div>
                        <div><Input type="checkbox" name="check1" /><label htmlFor="radio1">Ground Transport Insurance</label></div>
                   </div>
                   <div className="Fsettings"> 
                        <div><Input type="checkbox" name="check1"  defaultChecked={true}/><label htmlFor="radio1">Invoices</label></div>
                        <div className="occupy2"><Input type="checkbox" name="check1" defaultChecked={true} /><label htmlFor="radio1">Payments</label></div>
                        
                   </div>
               </fieldset>
               <fieldset>
                   <legend>
                       Cummulative Duty Limit Notification Service
                   </legend>
                   
                   <div className="Fsettings"> 
                      <div><label htmlFor="radio1">End limit(days from actual time)</label></div>
                      <div><Input type="text" defultvalue="30" id="Dtnote" name="check1" /></div>
                  </div>
                  <div className="Fsettings"> 
                      <div><label htmlFor="radio1">Email to Notification</label></div>
                      <div><textarea type="checkbox" className="dripNote"  name="check1" /></div>
                  </div>
               </fieldset>
               <fieldset>
                   <legend>
                       Custom Delay Code
                   </legend>
                   <input 
                        type='submit'
                        onClick={addCodes}  
                        style={{float: 'right'}}
                        name="submit"
                        id="Update" 
                        className='Update' 
                        value="Add more codes" 
                    />
                   {code.codes.map((ele,index) => {
                       return <CodeItem key={index} item={ele.id} code={code} />
                   })}
                 
                   {/* <div className="Fsettings FsettingStyle"> 
                      <div><label htmlFor="radio1">Code</label><Input type="text" id="codeStyle"  name="check1" /></div>
                      <div><Input type="text"  name="check1" /></div>
                  </div>
                  <div className="Fsettings FsettingStyle"> 
                      <div><label htmlFor="radio1">Code</label><Input type="text" id="codeStyle"  name="check1" /></div>
                      <div><Input type="text"  name="check1" /></div>
                  </div>
                  <div className="Fsettings FsettingStyle"> 
                      <div><label htmlFor="radio1">Code</label><Input type="text" id="codeStyle"  name="check1" /></div>
                      <div><Input type="text"  name="check1" /></div>
                  </div>
                  <div className="Fsettings FsettingStyle"> 
                      <div><label htmlFor="radio1">Code</label><Input type="text" id="codeStyle"  name="check1" /></div>
                      <div><Input type="text"  name="check1" /></div>
                  </div>
                  <div className="Fsettings FsettingStyle"> 
                      <div><label htmlFor="radio1">Code</label><Input type="text" id="codeStyle"  name="check1" /></div>
                      <div><Input type="text"  name="check1" /></div>
                  </div>
                  <div className="Fsettings FsettingStyle"> 
                      <div><label htmlFor="radio1">Code</label><Input type="text" id="codeStyle"  name="check1" /></div>
                      <div><Input type="text"  name="check1" /></div>
                  </div> */}
               </fieldset>
            </div>
        )

}
export default FlightSettings;