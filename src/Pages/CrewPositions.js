import React, { useState } from 'react'
import Includes from "./CrewPsub.js";
import Cockpit from "./CrewPositionTabComp/cockpit.js";
import Cabin from "./CrewPositionTabComp/cabin.js";
import Maintanance from "./CrewPositionTabComp/maintanance.js";
import Ground from "./CrewPositionTabComp/ground.js";
import Positioning from "./CrewPositionTabComp/position.js";
  function Crewposition(){
    const [state,setState] = useState(1);
    const [Aircraft, setAircraft]  = useState('')
    const [include, setInclude]  = useState(false)
    const action = (index) => {
      setState(index)  
    } 
    const handleSelect = (e) =>{
       setAircraft(e.target.value)
    }
    const handleChange = (e) =>{
        if(e.target.checked){
            alert('Included Aircraft type will have the same function as the current aircraft')
            setInclude(true)
        }else if(!e.target.checked){
            setInclude(false)
        }
     }
     return(
         <div className='Crewpositions'>
             <div className="filter">
                <div className="filter_sub">
                    <div>Aircraft type<span style={{color: 'red', fontWeight: 'bold'}}>
                        *
                        </span>
                    </div>
                    <div>
                        <select onChange={handleSelect}>
                            <option>--select--</option>
                            <option>B762-767-200ER</option>
                            <option>BE20-KING AIR 200 S</option>
                            <option>B762-767-200EREE</option>
                            <option>E120 Embrair 120</option>
                        </select>
                    </div>
                </div>      
                <div style={{backgroundColor: 'ghostwhite'}}>
                    <label htmlFor='include' style={{margin: '0px 10px 0px 7px'}}>Include</label>
                    <input type='checkbox' onChange={handleChange}/>
                </div>  
                <div style={{backgroundColor: 'ghostwhite'}}>{include? <Includes/>: ''}</div>  
          </div>              
              <div className="tab1_container"style={{width: "50%",  marginTop: '20px'}}>
                      <div onClick={()=>action(1)} className={`${state===1? 'tab1 active-tab' : 'tab1'}`}><span>Cocpit</span></div>
                      <div onClick={()=>action(2)} className={`${state===2? 'tab1 active-tab' : 'tab1'}`}><span>Cabin</span></div>
                      <div onClick={()=>action(3)} className={`${state===3? 'tab1 active-tab' : 'tab1'}`}><span>Maintainance</span></div>
                      <div onClick={()=>action(4)} className={`${state===4? 'tab1 active-tab' : 'tab1'}`}><span>Ground</span></div>
                      <div onClick={()=>action(5)} className={`${state===5? 'tab1 active-tab' : 'tab1'}`}><span>Positioning</span></div>
                      
        <section id="content1" className={`${state===1? 'tab-content1 active-content':'tab-content'}`}>
            <Cockpit Aircraft={Aircraft} />
        </section>
        <section id="content2" className={`${state===2? 'tab-content1 active-content':'tab-content'}`}>
            <Cabin Aircraft={Aircraft}/>  	            
        </section>

        <section id="content3" className={`${state===3? 'tab-content1 active-content':'tab-content'}`}>
             <Maintanance Aircraft={Aircraft}/>  	
        </section>
        <section id="content4" className={`${state===4? 'tab-content1 active-content':'tab-content'}`}>
             <Ground Aircraft={Aircraft}/>
        </section>
        <section id="content5" className={`${state===5? 'tab-content1 active-content':'tab-content'}`}>
             <Positioning Aircraft={Aircraft}/>
        </section>
                   
       </div>
       <button id="Update" style={{marginLeft: '10px'}} >Update</button>   
    </div>
        

         
     )
 }
 export default Crewposition;