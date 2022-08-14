import React from 'react';
import PropTypes from "prop-types";
export class TodoItem extends React.Component{
    NameStyle = () =>{
        return{
        
            // width: '60%',
            // marginLeft: '30px',
            // textTransform: 'uppercase',
            // color: '#000',
            
        }
    }
   render(){
    const {id, name,utc} = this.props.todo;
       return(  
         <div>
             {/* <div className="BS"> */}
                <table>
                     <tr>
                         <td id="count">{ this.props.todo.count }</td>
                         <td>{ this.props.todo.name }</td>
                         <td>{ this.props.todo.utc }</td>
                         <td>{ this.props.todo.NameType }</td>
                     </tr>
                </table>
                {/* <div><span id="zoneName">{ this.props.todo.name }</span></div>
                <div className="first"><span id="zoneName">{ this.props.todo.utc }</span></div>
                <div><span id="zoneName">{ this.props.todo.NameType }</span></div>
                <div className="secound"><span><button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}><img src={Cancel} alt=""/></button></span></div> */}
             {/* </div> */}
             
          </div>
       )
   }
}    
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem