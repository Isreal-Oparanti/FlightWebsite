import React, {useState} from 'react';



function Cockpit(){  
    const [intervals, setIntervals] = useState({
        interval: '10,30,60'
    })
        return (
            <div>
                <div className="mailingcheck">
                    <input type="checkbox"/>&nbsp;&nbsp;Send new emails
                    <button id="Update">Update</button>
                </div>
               <div className="mailingcheck"><div className='endorseHeader'><b>settings</b></div></div>
               <div id="endorsementNotifications" className="mailingcheck">
                  <div>Endorsement Notification rules:</div><div><select><option>VISA</option><option>Add new rule</option></select></div>
               </div>
               <div className="mailingHead mailingcheck">
                  <div>
                      <div className="endorseHeader"><b>Basic settings</b></div><br/>
                      
                          <label htmlFor="rulename">Rule name<span style={{color: 'red', fontWeight: 'bold'}}>*</span></label><br/>
                          <input type="text"  placeholder="name"/><br/>
                          <label htmlFor="intervals">intervals</label><br/>
                          <input type="text" value={intervals.interval} onChange={(e)=> setIntervals({interval: e.target.value})}/><br/>
                          <label htmlFor="rulename">template</label><br/>
                          <select><option>Default template</option></select><br/>
                          <button id="Update">Delete Rule</button>
                  </div>
                  <div>
                     <div className="endorseHeader"><b>Recipients</b></div><br/>
                     <input id="mailingcheck2" type="checkbox"/>&nbsp;&nbsp;Send Notification to Owner<br/><br/>
                     <span>Send summary email to</span><br/>
                     <select>
                         <option>Thomson, Mark(ZZZ_P)</option>
                         <option>Thomson, Johwn(ZZZ_P)</option>
                         <option>Thomson, Wilson(ZZZ_P)</option>
                    </select><br/><br/>
                    <div style={{color: 'darkblue', cursor: 'pointer'}}>Add Recipients</div>
                  </div>
                  <div>
                     <div className="endorseHeader"><b>Functional groups</b></div><br/>
                     <input type="checkbox"/>&nbsp;&nbsp;Cabin<br/>
                     <input type="checkbox"/>&nbsp;&nbsp;Cockpit<br/>
                     <input type="checkbox"/>&nbsp;&nbsp;Ground<br/>
                     <input type="checkbox"/>&nbsp;&nbsp;Maintanance<br/>
                  </div>
                  <div id="last-endorse">
                      <div className="endorseHeader" ><b>Endorsements</b></div><br/>
                      
                          <div className="endorseFunction">
                              <div><input type="checkbox"/>&nbsp;&nbsp;Airport Recencies</div><div><input type="checkbox"/>&nbsp;&nbsp;License </div>
                          </div>
                          <div className="endorseFunction">
                              <div><input type="checkbox"/>&nbsp;&nbsp;Online familarization</div><div><input type="checkbox"/>&nbsp;&nbsp;Us Visa</div>
                          </div>
                          <div className="endorseFunction">
                              <div><input type="checkbox"/>&nbsp;&nbsp;CX5 License</div><div><input type="checkbox"/>&nbsp;&nbsp;Line Check </div>
                          </div>
                          <div className="endorseFunction">
                              <div><input type="checkbox"/>&nbsp;&nbsp;Russian visa</div><div><input type="checkbox"/>&nbsp;&nbsp;TR </div>
                          </div> 
                           

                          
                  </div>
               </div>
            </div>
        )
     }
export default Cockpit;


 