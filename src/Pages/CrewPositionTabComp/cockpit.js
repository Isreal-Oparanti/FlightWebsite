import React, {useState} from 'react';
import {option1, option2, option3, option4} from './CockpitComponents/data.js'
import Singleton from './CockpitComponents/SingleItem.js'
 
function Cockpit({Aircraft}){
        var Option;
        if(Aircraft == '')   Option = option1
        if(Aircraft == 'B762-767-200ER') Option = option1
        if(Aircraft == 'BE20-KING AIR 200 S') Option = option2
        if(Aircraft == 'B762-767-200EREE')  Option = option3
        if(Aircraft == 'E120 Embrair 120') Option = option4
  
      const handleChange = (e) =>{
         let checked = e.target.checked;
         if(checked){  
            Option.map((ele,index) => {
                if(ele.craft === e.target.value){
                   Option[index].checked = true  
                }
            })  
          }else if(!checked){
            Option.map((ele,index) => {
                if(ele.craft === e.target.value){
                   Option[index].checked = false  
                }
             })
          }
       }
      const handleChangeDefault = (e) =>{
        let checked = e.target.checked;
        if(checked){
          Option.map((ele,index) => {
             if(ele.craft === e.target.value){
                Option[index].Default = true  
             }
          })
       }else if(!checked){
         Option.map((ele,index) => {
             if(ele.craft === e.target.value){
                Option[index].Default = false  
             }
          })
       }
    }
 
        return (
        <div id='crewpositions'>
               <div className="CrewpositionHead"> 
                   <div>Use</div>
                   <div>Function</div>
                   <div>Default</div>
              </div>
              {Option.map((ele, index) => {
                return <Singleton 
                          key={ele.id} 
                          handleChange={handleChange} 
                          handleChangeDefault={handleChangeDefault} 
                          item={ele} 
                        />
              })
                
              }
              {/* <DataItem handleChange={handleChange} handleChangeDefault={handleChangeDefault} Aircraft={Aircraft}
               option1={option1} option2={option2} option3={option3} option4={option4}/>        */}

              {/* <button onClick={handleUpdate}>update</button>               */}
                       
          </div>
       )
     }
export default Cockpit;


 