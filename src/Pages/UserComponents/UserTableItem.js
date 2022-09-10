import React from 'react';
import TableItem from './TableItem.js';

function Item(props){ 
    let Ratings = props.Ratings;
    let Ratings1 = props.Ratings1;
    let Ratings2 = props.Ratings2;
    let Ratings3 = props.Ratings3;
    
       return(
            props.User.map((item) => (
               <TableItem  key={item.user} users={item} Ratings={Ratings} Ratings1={Ratings1} Ratings2={Ratings2} Ratings3={Ratings3}   />
           ))          
        )     
}
 export default Item  