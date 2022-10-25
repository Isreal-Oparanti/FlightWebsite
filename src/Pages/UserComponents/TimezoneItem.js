import React from 'react';
import PropTypes from "prop-types";
import Cancel from "../../Assets/images/cancel.png";
import scan from "../../Assets/images/scan.png";
export class TodoItem extends React.Component{
    render(){
     const { id,name,utc,onChange } = this.props.item;
     console.log(this.props.Value)
       return (                
                  <tr className="PassportTableData">
					<td><input type="text" maxlength="3"/></td>
                    <td><input type="text" id="number" name='no' maxlength="10" onChange={onChange} /></td>
                    <td><input type="date" name='date_of_issue' required onChange={onChange}/></td>
                    <td><input type="date" name='expiry_date' required onChange={onChange}/></td>
                    <td><div className='file-upload'>
                            <label for="file-input">
                                <img src={scan} alt={'scan'}/>
                            </label>
                            <input id="file-input" type='file'/>	   
                    </div></td>
                    <td><input type="checkbox" /></td>
                    <td id="close-btn"><b><span className="close-btn1" onClick={this.props.delTodo.bind(this,id)}>&times;</span></b></td>
				</tr>
       )

   }
}    
 //PropTypes
const btnStyle = {
    backgroundColor: "#fff",
    border: "none"
}
export default TodoItem
