import React, {useState} from 'react';
import {cockpit,cabin,ground,maintanance} from './data.js' 
import Singleton from './SingleItem.js' 
function Endorse({onChange, setEndorse, state,endorse, onSubmit, setNewEndorse}){
    
    
    const [Aircraft, setAircraft] = useState({
        craft: ['all','B762-767-200ER','BE20-KING AIR 200 S','B762-767-200EREE','E120 Embrair 120']
    })
        // console.log(endorse)
    const handleChange = (e) =>{
      let checked = e.target.checked;
       
        if(checked){  
           cockpit.map((ele,index) => {
                if(ele.craft === e.target.value){
                cockpit[index].checked = true  
                setEndorse((prev) =>{
                    return {...prev, cockpit: e.target.value}
                })
               }
           })  
         }else if(!checked){
            cockpit.map((ele,index) => {
               if(ele.craft === e.target.value){
                cockpit[index].checked = false
                setEndorse((prev) =>{
                    return {...prev, cockpit: ''}    
                })  
               }
            })
         }
         if(checked){  
            cabin.map((ele,index) => {
                if(ele.craft === e.target.value){
                    cabin[index].checked = true  
                    setEndorse((prev) =>{
                        return {...prev, cabin: e.target.value}
                        
                    })
                }
            })  
          }else if(!checked){
             cabin.map((ele,index) => {
                if(ele.craft === e.target.value){
                 cabin[index].checked = false 
                 setEndorse((prev) =>{
                    return {...prev, cabin: ''}
                    
                }) 
                }
             })
          }
          if(checked){  
            ground.map((ele,index) => {
                if(ele.craft === e.target.value){
                 ground[index].checked = true  
                 setEndorse((prev) =>{
                    return {...prev, ground: e.target.value}
                })
                }
            })  
          }else if(!checked){
             ground.map((ele,index) => {
                if(ele.craft === e.target.value){
                 ground[index].checked = false  
                 setEndorse((prev) =>{
                    return {...prev, ground: ''}
                    
                })
                }
             })
          }
          if(checked){  
            maintanance.map((ele,index) => {
                if(ele.craft === e.target.value){
                 cockpit[index].checked = true 
                 setEndorse((prev) =>{
                    return {...prev, maintanance: e.target.value}
                    
                }) 
                }
            })  
          }else if(!checked){
            maintanance.map((ele,index) => {
                if(ele.craft === e.target.value){
                 maintanance[index].checked = false  
                 setEndorse((prev) =>{
                    return {...prev, maintanance: ''}
                    
                })
                }
             })
          }
        
      }
    //    console.log(cockpit,cabin,maintanance,ground)
      const handleonChange = (e) => {
          
        setEndorse((prev) =>{
            return {...prev, aircraftType: e.target.value}
            
        })
      }
         return (
             <div className="endorse">
                   <div className="endorse_container">
                       <div className=''>
                            <div className="endorse1">
                               <div><label>Endorsement<span style={{color: 'red', fontWeight: 'bold', margin: '0px'}}>*
                                </span> </label></div><div><input type="text" name="endorsement" onChange={onChange}/></div>
                            </div>
                            <div className="endorse1">
                               <div><label htmlFor="endorsement">Endorsement type</label></div><div><input type="radio" id='endorsement' value="endorsement" name="endorsementType" onChange={onChange}/><span>Endorsement</span></div>
                            </div>
                            <div className="endorse1">
                               <div><label htmlFor="lisence"></label></div><div><input type="radio" id="lisence" name="endorsementType" value="lisence" onChange={onChange} /><span>Licence</span></div>
                            </div>
                            <div className="endorse1">
                               <div><label htmlFor="visa"></label></div><div><input type="radio" id="visa" name="endorsementType" value="visa" onChange={onChange}/><span>Visa</span></div>
                            </div>
                            <div className="endorse1">
                               <div><label></label></div><div><input type="checkbox"/><span>Passport</span></div>
                            </div>
                            <div className="endorse1" style={{marginTop: '10px'}}>
                               <div><label>Warn if expired when adding a flight</label></div><div><input type="checkbox" name='warn' value='yes' onChange={onChange}/></div>
                            </div>            
                        </div>
                             
        
                       <div className="">
                           <fieldset>
                               <legend>
                                   <b>Revalidation rules</b>
                               </legend>
                            <div className="endorse1">
                               <div><label>Validity time(months)</label></div><div><input type="text" name='validityTime' maxlength='2' value={state.validityTime} onChange={onChange}/></div>
                            </div>
                            <div className="endorse1">
                               <div><label>Revalidation windows(days)</label></div><div><input type="text" name="revalidationDays" maxlength='2' value={state.revalidationDays} onChange={onChange}/></div>
                            </div>
                            <div className="endorse1">
                            <div><input type="checkbox" style={{marginRight: '10px'}}/><label>Round to the end of the month if outside revalidation window</label></div> 
                            </div>
                           </fieldset>
                           <fieldset>
                               <legend>
                                   <b>Action required when expiring</b>
                               </legend>
                            <div className="endorse1">
                               <div><textarea type="text" className="defaults"  name="ActionWhenExpire" onChange={onChange} /></div>
                            </div>
                          </fieldset>
                       </div>
                   </div>
                 
                   <div className='endorseContainer2'> 
                      <div className='endorseContainer2_sub'>
                      <div className='endorseHeader'>Endorsement for</div>       
                         <div className="endorse2">
                                <fieldset>
                                    <legend>
                                        Cockpit
                                    </legend>
                                    {cockpit.map((ele, index) => {
                                          
                                    return    <Singleton 
                                                    key={ele.id} 
                                                    handleChange={handleChange} 
                                                    item={ele} 
                                               />                            
                                    })} 
                                </fieldset>
                          </div>
                          <div className="endorse2">
                                <fieldset>
                                    <legend>
                                        Cabin
                                    </legend>
                                    {cabin.map((ele, index) => {
                                          
                                    return    <Singleton 
                                                    key={ele.id} 
                                                    handleChange={handleChange} 
                                                    item={ele} 
                                               />                            
                                    })}
                                </fieldset>
                          </div>
                          <div className="endorse2">
                                <fieldset>
                                    <legend>
                                        GROUND
                                    </legend>
                                    {ground.map((ele, index) => {
                                          
                                    return    <Singleton 
                                                    key={ele.id} 
                                                    handleChange={handleChange} 
                                                    item={ele} 
                                               />                            
                                    })}
                                </fieldset>
                          </div>
                          <div className="endorse2">
                                <fieldset>
                                    <legend>
                                        Maintanance
                                    </legend>
                                    {maintanance.map((ele, index) => {
                                          
                                    return    <Singleton 
                                                    key={ele.id} 
                                                    handleChange={handleChange} 
                                                    item={ele} 
                                               />                            
                                    })}
                                </fieldset>
                          </div>
                        </div>
                      <div >
                          <div className='endorseHeader'>Aircraft type</div>
                          {Aircraft.craft.map((ele,index) => {
                              
                              return <div className="endorse2" key={index} style={{marginTop: '10px'}}> 
                                      <div><label></label></div><div><input type="checkbox" value={ele} onChange={handleonChange} /><span>{ele}</span></div>
                                   </div>
                          })}
                      </div>
                   </div>
                   <div className='SaveUserButtons'>
                    <form style={{display: 'inline'}} onSubmit={onSubmit}>
                        <button>
                           Update
                        </button>
                    </form>
                </div>
             </div>    
      )
     }
export default Endorse;