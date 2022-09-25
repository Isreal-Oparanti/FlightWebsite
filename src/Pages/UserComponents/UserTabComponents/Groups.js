import React,{useState} from 'react'; 
import {v4 as uuidv4} from 'uuid';
function Group(props){
    const [change, setchange] = useState('');    
    const [change1, setchange1] = useState('');    
    const [state, setState] = useState({
            arr: props.user.selectedgroup
    })
    const [state1, setState1] = useState({
        arr: props.user.notselectedgroup
    })
    const handleClick = () => {
        setState({arr: [...state.arr, {name: change, id: uuidv4()}]});
        setState1({arr: [...state1.arr.filter(e => e.name != change)]}); 
        setchange('')
    }
    const handleClick1 = () => {
            setState({arr: [...state.arr.filter(e => e.name != change1)]});
            setState1({arr: [...state1.arr, {name: change1, id: uuidv4()}]});
    }
    
        return(
           <div className="Group__container">
              <div>
                 <div className="member">is a member</div>
                 <div className="member__group">All user<br/>{state.arr.map((ele) => {
                     return <label><p id="GroupParagraph" key={ele.id}><span className='group_name'>{ele.name}</span><span style={{margin: '7px'}}><input type='checkbox' onChange={(e)=>{
                    if(e.target.checked == true){
                        setchange1(ele.name)         
                     }
                 }}/></span></p></label>
                 })}</div>
                 <button id='group_btn' onClick={handleClick1}>Remove selected</button> 
              </div>
              <b className="Memarrow"> &#8592;<br/>
              &#8594;
              </b>
              <div>
                 <div className="member">Not a member</div>
                 <div className="member__group">
                     {state1.arr.length == 0?  [
		           {
					   name: 'admin',
					   id: uuidv4()
				   },
				   {
					    name: 'crew',
						id: uuidv4()
				   },
				   {
					    name: 'OPS',
						id: uuidv4()
				   },
				   {
					    name: 'sales',
						id: uuidv4()
				   },
				   {
					    name: 'basic',
						id: uuidv4()
			   	   }  
				   
		        ].map((ele) => <p>{ele}</p>) :
                      state1.arr.map((ele, index) => {
                          return <label><p id="GroupParagraph" key={ele.id}>{ele.name}<span style={{margin: '10px'}}><input type='checkbox' value="check" onChange={(e)=> {
                                  if(e.target.checked == true){
                                      setchange(ele.name)         
                                  }
                          }}/></span></p></label>
                      })}</div>
                    <button id='group_btn' onClick={handleClick}>Add selected</button> 
                  
              </div>
           </div>
        )      
    }
     export default Group; 





    //  import React, { Component } from 'react';
    //  import {v4 as uuidv4} from 'uuid';
    //    class Group extends Component{
    //        state = {
    //           arr: this.props.user.selectedgroup, 
    //           arr1: this.props.user.notselectedgroup,
    //           change: ''
    //        }
     
    //        handleClick = () => {
    //          console.log(...this.state.arr)
    //          this.setState({arr: [...this.state.arr, {name: this.state.change, id: uuidv4()}]});
    //          this.setState({arr: [...this.state.arr1.filter(e => e.name !== this.state.change)]}); 
    //          console.log(this.state)
    //       }  
    //      render(){
         
    //          return(
    //                         <div className="Group__container">
    //                            <div>
    //                               <div className="member">is a member</div>
    //                               <div className="member__group">All user<br/>{this.state.arr.map((ele) => <p>{ele.name}</p>)}</div>
    //                               <span>Select All</span> <span>Unselect All</span>
    //                            </div>
    //                            <b className="Memarrow"> &#8592;<br/>
    //                            &#8594;
    //                            </b>
    //                            <div>
    //                               <div className="member">Not a member</div>
    //                               <div className="member__group">
    //                                   {/* {this.state.arr1.length == 0? ['admin','crew','OPS','basic', 'sales'].map((ele) => <p>{ele}</p>) : */}
    //                                    {this.state.arr1.map((ele, index) => {
    //                                        return <p>{ele.name}<input type='checkbox' value="check" onChange={(e)=> {
    //                                                if(e.target.value){
    //                                                    this.setState({change: ele.name})
    //                                                    console.log(ele.id)
    //                                                }
    //                                        }}/></p>
    //                                    })}</div>
    //                                  <button onClick={this.handleClick}>Add selected</button> <span>Unselect All</span>
                                   
    //                            </div>
    //                         </div>
    //                      )      
    //                  }       
    //      }     
       
    //       export default Group; 
     
     