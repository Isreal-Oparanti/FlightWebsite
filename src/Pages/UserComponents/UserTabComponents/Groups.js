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
     
    const [state2, setState2] = useState({
        arr: [
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
            
         ]
     })
     const [state3, setState3] = useState({
        arr: []
    })
    const handleClick = () => {
          

        if(change !== ''){
            setState({arr: [...state.arr, {name: change, id: uuidv4()}]});
            setState3({arr: [...state3.arr, {name: change, id: uuidv4()}]});
        }
        setState1({arr: [...state1.arr.filter(e => e.name != change)]}); 
        setState2({arr: [...state2.arr.filter(e => e.name != change)]}); 
        setchange('')
    }
    const handleClick1 = () => {
            setState({arr: [...state.arr.filter(e => e.name != change1)]});
            setState3({arr: [...state3.arr.filter(e => e.name != change1)]});
            if(change1 !== ''){
                if(state1.arr.length !== 0){
                  setState1({arr: [...state1.arr, {name: change1, id: uuidv4()}]});
                }
                setState2({arr: [...state2.arr, {name: change1, id: uuidv4()}]});  
            }   
            setchange1('')
    }
     
    
        return(
           <div className="Group__container">
              <div>
                 <div className="member">is a member</div>
                 <div className="member__group"><h3>All user</h3><br/>{state1.arr.length == 0? state3.arr.map((element, index) => {
                          return <label><p id="GroupParagraph" key={element.id}>{element.name}<span style={{margin: '10px'}}><input type='checkbox' value="check" onChange={(ele)=> {
                                  if(ele.target.checked == true){
                                      setchange1(element.name)         
                                  }
                          }}/></span></p></label>
                      }):
                 state.arr.map((ele) => {
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
                     {state1.arr.length == 0? state2.arr.map((element, index) => {
                          return <label><p id="GroupParagraph" key={element.id}>{element.name}<span style={{margin: '10px'}}><input type='checkbox' value="check" onChange={(ele)=> {
                                  if(ele.target.checked == true){
                                      setchange(element.name)         
                                  }
                          }}/></span></p></label>
                      }):
                              
                      state1.arr.map((ele, index) => {
                          return <label><p id="GroupParagraph" key={ele.id}><span className='group_name'>{ele.name}</span><span style={{margin: '10px'}}><input type='checkbox' value="check" onChange={(e)=> {
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