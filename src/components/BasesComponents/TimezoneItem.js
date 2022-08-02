import React from 'react';
import PropTypes from "prop-types";
import Cancel from "./images/Cancel.png";
export class TodoItem extends React.Component{
    NameStyle = () =>{
        return{
            width: '60%',
            marginLeft: '30px',
            textTransform: 'uppercase',
            color: '#000',
            
        }
    }
   render(){
    const {id, name,utc} = this.props.todo;
       return(  
         <div style={this.NameStyle()}>
             <div className="BS">
                <div><span id="zoneName">{ this.props.todo.name }</span></div>
                <div className="first"><span id="zoneName">{ this.props.todo.utc }</span></div>
                <div className="secound"><span><button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}><img src={Cancel} alt=""/></button></span></div>
             </div>
          </div>
       )
   }
}    
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
    backgroundColor: "#fff",
    border: "none",
    float: "right"
}
export default TodoItem