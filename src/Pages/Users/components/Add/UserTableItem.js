import React from 'react';
import TableItem from './TableItem.js';

function Item(props){
    //  coprops.Gettingfunc() 
    
       return(
            props.User.map((item) => (
               <TableItem  
                   key={item.user} 
                   users={item} 
                   handlefulledit={props.a} 
                   fulledit={props.fulledit}
                   Value={props.Value}
                   delTodo={props.delTodo}
                   onSubmit={props.onSubmit}   
               />
           ))          
        )     
    }

 export default Item  