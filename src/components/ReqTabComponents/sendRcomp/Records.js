import React from 'react';

function Record(props){
  //  let record = props.addTimezone 
  console.log(props)
       return(
           <div>
             <span className="Records">Records 1 - {props.addRecords}</span> 
           </div>       
        )
   
}
export default Record;