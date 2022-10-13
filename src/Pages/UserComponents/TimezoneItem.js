import React from 'react';
import PropTypes from "prop-types";
import Cancel from "../../Assets/images/cancel.png";
export class TodoItem extends React.Component{
    render(){
     const {id, name,utc} = this.props.todo;
       return (                
                  <tr className="PassportTableData">
					<td>{this.props.todo.country}</td>
                    <td>{this.props.todo.no}</td>
                    <td>{this.props.todo.date_of_issue}</td>
                    <td>{this.props.todo.expiry_date}</td>
                    <td>{this.props.todo.passport}</td>
                    <td>{this.props.todo.default}</td>
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
