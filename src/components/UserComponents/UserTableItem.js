import React from 'react';
import TableItem from './TableItem.js';

function Item(props){ 
       return(
            props.User.map((item) => (
               <TableItem  key={item.user} users={item} />
           ))          
        )     
}
 export default Item 