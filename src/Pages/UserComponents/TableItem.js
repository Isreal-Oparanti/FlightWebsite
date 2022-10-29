import React, { Fragment, useState } from "react";
// import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import edit from "../../Assets/images/edit.png";
import Edit from "./FullUserEdit.js";

import BasicInfo from "./UserTabComponents/BasicInfo.js";
import Endorsement from "./UserTabComponents/Endorsement.js";
import Ratings from "./UserTabComponents/Ratings.js";
import LoginHistory from "./UserTabComponents/LoginHistory.js";

function TableItem(props){
  
  const [ButtonTrue,setButtonTrue] = useState(false);
  // props.handlefulledit(ButtonTrue,setButtonTrue)
  const [state,setState] = useState(1);
      const action = (index) => {
        setState(index)
  } 
  
  const {name,code,login,email,lastvisit} = props.users; 
     return(  
       <Fragment>      
          <tr className="UserTableRow" border='1'>
              <td>{name}</td>
              <td>{code}</td>
              <td>{login}</td>
              <td>{email}</td>
              <td><input type="checkbox" defaultChecked="true"/></td>
              <td><div className="AddUsersForm">
        <div><input type="text"  style={{width: '80%', marginBottom: '3px'}}  
                  value={props.users.selectedgroup.map((e,index)=> {
                      return e.name
                    })} /></div></div>
             </td>
              <td style={{fontFamily: 'Verdana', fontSize: '12px'}}>{lastvisit}</td>
              <td><img src={edit} alt="edit images" onClick={() => {setButtonTrue(true)}}/></td>         
          </tr>
          <Edit trigger={ButtonTrue} setTrigger={setButtonTrue} >
                     <h1 className="UserHeaderText">{props.users.name}</h1>
      <div className="ReqApp" style={{borderBottom: '2px solid #999'}}>
    <div className="tab1_container"style={{width: "50%", fontSize: '11.83px'}}>
                      <div onClick={()=>action(1)} className={`${state===1? 'tab1 active-tab' : 'tab1'}`}><span>Basic Information</span></div>
                      <div onClick={()=>action(2)} className={`${state===2? 'tab1 active-tab' : 'tab1'}`}><span>Personanl Endorsements</span></div>
                      <div onClick={()=>action(3)} className={`${state===3? 'tab1 active-tab' : 'tab1'}`}><span>Ratings</span></div>
                      <div onClick={()=>action(4)} className={`${state===4? 'tab1 active-tab' : 'tab1'}`}><span>Login History</span></div>
        <section id="content1" className={`${state===1? 'tab-content1 active-content':'tab-content'}`}>
            <BasicInfo 
                user={props.users} 
                Value={props.Value} 
                delTodo={props.delTodo} 
                onSubmit={props.onSubmit} 
            />
        </section>
        <section id="content3" className={`${state===2? 'tab-content1 active-content':'tab-content'}`}>
             <Endorsement />  	
        </section>
        <section id="content4" className={`${state===3? 'tab-content1 active-content':'tab-content'}`}>
             <Ratings users={props.users}/>
        </section>
        <section id="content5" className={`${state===4? 'tab-content1 active-content':'tab-content'}`}>
             <LoginHistory />
        </section>
       </div>
    </div>
          <button id="Update" style={{marginLeft: 0}} >Update</button>   
          </Edit>    
      </Fragment>
     )
 }
//PropTypes

export default TableItem;
