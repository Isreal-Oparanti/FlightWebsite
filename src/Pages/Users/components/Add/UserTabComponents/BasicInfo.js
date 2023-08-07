import React, {useState} from 'react';
import TimezoneItem from "../TimezoneItem.js";
function BasicInfo(props){
    console.log(props)
    ///***handling name/middlename and surname******////   
       if(props.user.name.split(' ').length === 2){
           var name = props.user.name.split(' ')[0]
           var surname = props.user.name.split(' ')[1]
       }
       else if(props.user.name.split(' ').length === 3){
               name = props.user.name.split(' ')[0]
           var middlename = props.user.name.split(' ')[1]
               surname = props.user.name.split(' ')[2]
       }else{
           name = props.user.name;
           middlename = props.user.middlename;
           surname = props.user.surname;
       }
   ///***Configuration of default value state*****////   
       const [state, setState] = useState({
           anual_limit: 10,
           name: name, 
           middlename: middlename,
           surname: surname,
           Knownas: name+' '+middlename+' '+surname,
           email: props.user.email,
           male: false,
           female: false,
           no: props.user.no,
           date_of_issue: props.user.date_of_issue,
           expiry_date: props.user.expiry_date
       })
   
       if(props.user.gender === 'male'){
           state.male = true
       }else if(props.user.gender === 'female'){
           state.female = true
       }
   
           
       return (
       <div>
          <div className="User__info">
               <div>
                   <h5>Phone Book</h5><br/>
                   <div className="AddUsersForm" > 
                       <div><label htmlFor="name">Name*</label></div>
                       <div><input type="text" name="name" value={state.name}  onChange={(e) => setState({name: e.target.value})} id="username"/></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Middle name</label></div>
                       <div><input type="text" name="middlename"  value={state.middlename}  onChange={(e) => setState({middlename: e.target.value})} /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Surname*</label></div>
                       <div><input type="text" name="surname" value={state.surname}  onChange={(e) => setState({surname: e.target.value})} /></div>
                  </div>
                  {/* <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Known as*</label></div>
                       <div><input type="text" name="name"  value={state.Knownas}  onChange={(e) => setState({Knownas: e.target.value})} /></div>
                  </div> */}
                  <div className="AddUsersForm"> 
			        <div><label>Permission Group*</label></div>
							<div><select><option>Admin</option><option>crew</option><option>OPS</option><option>sales</option><option>basic</option></select></div>
                      </div>
                  <div className="AddUsersForm"> 
                        <div><label htmlFor="sex" id="alignSex">Gender*</label></div>
                       <div><div className="userName"><span>M</span><input type="radio" name="sex" id="sex" defaultChecked={state.male}/><span>F</span><input type="radio" name="sex" id='sex' defaultChecked={state.female}/></div></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">ID card</label></div>
                       <div><input type="text" name="name"  /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Title</label></div>
                       <div><input type="text" name="name" /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Job Title</label></div>
                       <div><textarea></textarea></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Country</label></div>
                       <div><select><option>--select---</option></select></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Place of birth</label></div>
                       <div><input type="text" name="name"  /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Date of birth</label></div>
                       <div><input type="date" name="name"  /></div>
                  </div>
                     <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Client</label></div>
                        <div><input type="checkbox"/></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Vat</label></div>
                       <div><input type="text" name="name"  /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Crew Id</label></div>
                       <div><input type="text" name="name"  /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Hire Date</label></div>
                       <div><input type="text" name="name"  /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Next of kin Details:</label></div>
                       <div><textarea></textarea></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Active</label></div>
                        <div><input type="checkbox"/></div>
                  </div> <br/>
   
                  <hr style={{width: '14rem'}}/><br/>
                  <h5>Phone </h5><br/>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Work</label></div>
                       <div><input type="text" name="name"  /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Private</label></div>
                       <div><input type="text" name="name"  /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Fax</label></div>
                       <div><input type="text" name="name"  /></div>
                  </div><br/>
                  <hr style={{width: '14rem'}}/><br/>
                  <h5>Address</h5><br/>
                  <div className="AddUsersForm">  
                       <div><label htmlFor="name">Home</label></div>
                       <div><textarea></textarea></div>
                  </div><br/>
                  <hr style={{width: '14rem'}}/><br/>
                  <h5>Email</h5><br/>
                  <div className="AddUsersForm"> 
                     <div 
                        style={{marginBottom: '10px'}}>
                        All system <b>e-mail</b> are sent to work <b>e-mail</b></div>
                     </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Work</label></div>
                       <div><textarea>{state.email}</textarea></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Personal</label></div>
                       <div><input type="text" name="name"  /></div>
                  </div>
               </div>
               <div> 
                   <h5>User data</h5><br/>
                   <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Login</label></div>
                       <div><input type="text" name="name" value={props.user.login}  /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Code</label></div>
                       <div><input type="text" name="name" value={props.user.code}  /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">Home base</label></div>
                       <div><input type="text" name="name" value={props.user.login} /></div>
                  </div>
                  <div className="AddUsersForm"> 
                       <div><label htmlFor="name">User base</label></div>
                       <div><select><option>main</option></select></div>
                  </div><br/>
   
                  <hr style={{width: '14rem'}}/><br/>
                  <h5>Options</h5><br/>
                  <div className="AddUsersForm1"> 
                       <div><label htmlFor="name">OML</label></div>
                       <div><input type="checkbox"/></div>
                  </div>
                  <div className="AddUsersForm1"> 
                       <div><label htmlFor="name">Freelancer</label></div>
                       <div><input type="checkbox" /></div>
                  </div><br/>
                  <hr style={{width: '14rem'}}/><br/>
                  <h5>Days off</h5><br/>
                  <div className="AddUsersForm1"> 
                       <div><label htmlFor="name">User Anual limit</label></div>
                       <div><input type="text" value={state.anual_limit} onChange={(e) => setState({anual_limit: e.target.value})} id="Dtnote" name="check1"/></div>
                  </div>
                  <div className="AddUsersForm1"> 
                       <div><label htmlFor="name">User Operator Anual limit</label></div>
                       <div><div><input type="checkbox" defaultChecked={true}/></div></div>
                  </div><br/>
                  <hr style={{width: '14rem'}}/><br/>
                  <h5>Account Restriction</h5><br/>
                  <div className="AddUsersForm1"> 
                       <div><label htmlFor="name">Can log into trios</label></div>
                       <div><div><input type="checkbox" defaultChecked={true}/></div></div>
                  </div>
                  <div className="AddUsersForm1"> 
                       <div><label htmlFor="name">Active</label></div>
                       <div><div><input type="checkbox" defaultChecked={true}/></div></div>
                  </div>
                  <br/>
                  <hr style={{width: '14rem'}}/><br/>
                  <h5>Change Password</h5><br/>
                  <div className="AddUsersForm1"> 
                       <div><label htmlFor="name">Generate new password</label></div>
                       <div><div><input type="checkbox" /></div></div>
                  </div>
               </div>
                 <div id='lastChild'>
                   <h5>Passports</h5><br/>
                   <form onSubmit={props.onSubmit}>
			          <div className='UserHeader'>Passports<button>NEW PASSPORT</button></div>
			       </form>
                   <table className="PassportTable" >
						<tr id="PassportTableHead">
							<td  style={{width: '62px'}}>
								<h5>Country*</h5>
							</td>
							<td>
								<h5>No*</h5>
							</td>
							<td style={{width: '120px'}}>
								<h5>Date of issue</h5>
							</td>
							<td style={{width: '120px'}}> 
								<h5>Expiry date*</h5>
							</td>
							<td>
								<h5>Passport scan</h5>
							</td>
							<td style={{width: '57px'}}>
								<h5>Default</h5>
							</td>
						</tr>
                        {props.Value.zones.map((item) => (
                            <TimezoneItem 
							     item={item} 
									 value={props.Value}
									 key={item.id}  
									 delTodo={props.delTodo}
							 />     
                        ))}
                     </table>
			        {/* <div className="AddUsersPassports"> 
                       <div style={{flex: '2'}}>Country</div>
                       <div>No</div>
                       <div>Date of issue</div>
                       <div>Expires</div>
                    
                  </div> */}
                  {/* <div className="AddUsersPassports AddUsersPassports1"> 
                       <div style={{flex: '2'}}><select><option>main</option></select></div>
                       <div><input type="text" maxlength="10" value={state.no} onChange={(e)=> setState({no: e.target.value})}/></div>
                       <div><input type="text" value={state.date_of_issue} onChange={(e)=> setState({date_of_issue: e.target.value})} /></div>
                       <div><input type="text" value={state.expiry_date} onChange={(e)=> setState({expiry_date: e.target.value})}/></div>
                       <div><input type="text" /></div> */}
                  {/* </div> */}
               </div>
          </div>       
       </div>    
       )
     }
export default BasicInfo;