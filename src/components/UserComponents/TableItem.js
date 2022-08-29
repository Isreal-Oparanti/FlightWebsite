import React from 'react';
import PropTypes from "prop-types";
 function TableItem(props){
     console.log(props.Users)
       return(  
         <React.Fragment>        
            <tr className="UserTableRow">
                <td>{props.items.user}</td>
                <td>{props.items.code}</td>
                <td>{props.items.Email}</td>
                <td><input type="checkbox" defaultChecked={true}/></td>
                <td>{props.items.LastVist}</td>
                <td>edit</td>
            </tr>
        </React.Fragment>
       )
   }    
//PropTypes
TableItem.propTypes = {
    todo: PropTypes.object.isRequired
}
 
export default TableItem