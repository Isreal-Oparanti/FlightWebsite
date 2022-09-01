import React from 'react';
import RuleItem from './RuleItem.js';
import PropTypes from "prop-types";

class Zones extends React.Component{
   render(){
    
       return(
        this.props.zones.map((zone) => (
           <RuleItem todo={zone} key={zone.id} delTodo={this.props.delTodo}/>                
         ))
        )
   }

}
Zones.propTypes = {
  zone: PropTypes.object.isRequired
}    
export default Zones 