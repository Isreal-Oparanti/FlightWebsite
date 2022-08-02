import React from 'react';

export class AddTodo extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        console.log(e.target.value); 
        this.setState({utc: e.target.value})
    }
    
    state = {
        name: this.state,
        utc: 'utc'
    }
    onSubmit = (e) => {
        
        e.preventDefault();
        this.props.addTimezone(this.state.name,this.state.utc);
        // this.props.addTodo(this.state.utc);
        // this.setState({title: ''});
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value})
   render(){
    
  const options = [
        {
            label: "UTC",
            value: 'UTC'
        },
        {
            label: "moschow (RU, UTC+3:00)",
            value: 'mosshow (RU, UTC+3:00)'
        },
        {
            label: "london (RU, UTC+3:00)",
            value: 'london (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        }


        
    ]


       return(
           <div className="AddApp">
           <form onSubmit={this.onSubmit}>
              <select ><option>IATA</option><option>ICAO</option></select><input  id="Tname" type='text' name="name" placeholder="Name"  onChange={this.onChange}  />
              <select value={this.state.utc} onChange={this.handleChange}>
                    {options.map((option) => (
                    <option value={option.value} > {option.label}</option>
                    ))}
                    </select>
              <input type='submit' name="submit" id="Update" value="Add" />
           </form> 
           </div>       
        )
   }

}

export default AddTodo