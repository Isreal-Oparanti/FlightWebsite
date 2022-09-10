import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import UserTableItem from "./UserComponents/UserTableItem.js";
import AddUser from "./UserComponents/AddUser.js";
// import PassportTables from "./UserComponents/passportItem.js";
import Timezones from './UserComponents/Timezones.js';
// import Document from "./FullUserEdit.js"; 
   function Tab(){
	const [ButtonTrue,setButtonTrue] = useState(false);
	const [Users, setUsers] = useState({
		name: '',
		middlename:'',
		surname:'',
		code: '',
		login: '',
		homebase1: '',
		homebase2: '',
		email: '',
		permissionGroup: ''
	});
//****User state*********/////	
	const [state,setState] = useState({
		users: [ 
			{
			name: 'Abbott Micheal',
			code: 'GNR',
			login: 'CHB',
			homebase1: 'SMJ',
			homebase2: 'DGN',
			email: 'Abbort@preairways.com',
			lastvisit: "14-12-2021 10:23 "
		   },
		  {
			name: 'Willson Smart',
			code: 'GNR',
			login: 'CHB',
			homebase1: 'PDF',
			homebase2: 'CHM',
			email: 'Abbort@preairways.com',
			lastvisit: "14-12-2021 10:23 "
		  }, 
		  {
			name: 'Micheal Jackson',
			code: 'GNR',
			login: 'CHB',
			homebase1: 'COP',
			homebase2: 'CHM',
			email: 'Abbort@preairways.com',
			lastvisit: "14-12-2021 10:23 "
		}
	]
	});
	
	const onChange = (e) => {
		const {name, value} = e.target;
		setUsers((prev) =>{
			return {...prev, [name]: value}
			
		})
	}
	const addUser = () => {
		  let name = Users.name +" "+ Users.middlename +" "+ Users.surname;
		  let code = Users.code;
		  let email = Users.email;
		  let login = Users.login;
		  let homebase1 = Users.homebase1;
		  let homebase2 = Users.homebase2;
		  let permissionGroup = Users.permissionGroup
		  const newTodo = {
				name: name,
				code: code,
				login: login,
				email: email,
				homebase1: homebase1,
				homebase2: homebase2,
				permissionGroup: permissionGroup,
				lastvisit: "14-12-2021 10:23"
			}
			  
			  setState({ users:[...state.users, newTodo]})	 
			   
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		 addUser()
	}
	const [Selectvalue, setSelectvalue] = useState({
		maps: [],
		mapTitles: ''
	});
	const [Selectvalue1, setSelectvalue1] = useState({
		maps: [],
		mapTitles: ''
	});
	const [Selectvalue2, setSelectvalue2] = useState({
		maps: [],
		mapTitles: ''
	});
	const [Selectvalue3, setSelectvalue3] = useState({
		maps: [],
		mapTitles: ''
	});
    const [Value, setValue] = useState({
		zones:[],	   	
	 })
	 
	 const delTodo = (id) => {
	    setValue({zones: [...Value.zones.filter(zone => zone.id !== id)] })
	}
	const onSubmit = (e) => {
			e.preventDefault();
			addTimezone();
	}
	const addTimezone = () => {
		const newTodo = {
			id: uuidv4()
	   }   
		   setValue({ zones:[...Value.zones, newTodo]});
	}
	const handleChange = (e) => {
			setSelectvalue({maps: [...Selectvalue.maps, e.target.value] ,mapTitles: 'B762-762-2002R'})
	}
	const handleChange1 = (e) => {
			setSelectvalue1({maps: [...Selectvalue1.maps, e.target.value], mapTitles: 'CD4E-2l345-HRD'})
	}
	const handleChange2 = (e) => {
			setSelectvalue2({maps: [...Selectvalue2.maps, e.target.value], mapTitles: 'FDE-20845-HRD'})
	}
	const handleChange3 = (e) => {
			setSelectvalue3({maps: [...Selectvalue3.maps, e.target.value], mapTitles: 'V762-062-8002A'})
	}
	const handleSelect = (e) => {
		setUsers((prev) =>{
			return {...prev, permissionGroup: e.target.value}	
		})
    }		 
	  
     return (
        <div className="UserApp">
		  <table className="UserTable" border='1'>
				<tr className='UserTableHead' >
				    <td><span className='hrline'></span>Name</td>
					<td className='code'>Code</td>
					<td className='code'>Login</td>
					<td className='Email'>Email</td>
					<td className='status'>Status</td>
					<td className='lastvisit'>Last Visit Date</td>
					<td className='edit'>Full edit</td>
				</tr>
				<UserTableItem  User={state.users}  Ratings={Selectvalue} Ratings1={Selectvalue1} Ratings2={Selectvalue2} Ratings3={Selectvalue3}/>
			</table>	
		  <AddUser trigger={ButtonTrue} setTrigger={setButtonTrue}>
			   <h5 style={{textAlign: "center", fontSize: '20px', marginBottom: "8px"}}>USER EDIT</h5>
			   <hr/>
			   <div className='UserHeader'>person</div>
			   <div className="AddUsersForm" id="firstChild"> 
					<div><label htmlFor="name">Name*</label></div>
					<div><input type="text" name="name" placeholder="Name" id="username" onChange={onChange}/></div>
					<div><label htmlFor="sex" id="alignSex">Sex*</label></div>
					<div><div className="userName"><span>M</span><input type="radio" name="sex" id="sex"/><span>F</span><input type="radio" name="sex" id='sex'/></div></div>
               </div>
			   <div className="AddUsersForm"> 
					<div><label htmlFor="name">Middle name</label></div>
					<div><input type="text" name="middlename" placeholder="Middle Name" onChange={onChange} /></div>
					<div><label htmlFor="sex">DoB</label></div>
					<div><input type="text" name="name" /></div>
               </div>
			   <div className="AddUsersForm"> 
					<div><label htmlFor="name">Surname*</label></div>
					<div><input type="text" name="surname"  placeholder="Surname" onChange={onChange}/></div>
					<div><label htmlFor="sex">Phone</label></div>
					<div><input type="text" name="name" /></div>
               </div>
			   <div className="AddUsersForm">
			        <div><label htmlFor="name">Labels</label></div>
					<div><select><option>...</option></select></div> 
					{/* <div><label htmlFor="name">Known as*</label></div>
					<div><input type="text" name="name"  onChange={onChange}/></div> */}
					<div><label htmlFor="email">E-mail</label></div>
					<div><input type="email" name="email" onChange={onChange} /></div>
               </div>
			   <div className="AddUsersForm"> 
			        <div><label htmlFor="name" >Code*</label></div>
					<div><input type="text" name="code"  placeholder="Code" onChange={onChange} /></div>
					<div><label htmlFor="sex">Company</label></div>
					<div><input type="text" name="name" placeholder="Seach Company"  /></div>
               </div>
			   <div className="AddUsersForm"> 
			        <div><label htmlFor="name">Homebase 1*</label></div>
					<div><input type="text" name="homebase1" onChange={onChange} /></div>
					<div><label htmlFor="sex">Login*</label></div>
					<div><input type="text" name="login" onChange={onChange} /></div>
               </div>
 
			   <div className="AddUsersForm"> 
			        <div><label>Permission Group*</label></div>
					<div><select onChange={handleSelect}><option>crew</option><option>Admin</option></select></div>
					<div><label htmlFor="sex">Homebase 2</label></div>
					<div><input type="text" name="homebase2"  onChange={onChange} /></div>
               </div>
			   <div className="AddUsersForm"> 
					
               </div>
			   <form onSubmit={onSubmit}>
			     <div className='UserHeader'>Passports<button>NEW PASSPORT</button></div>
			   </form>	 
			   <table className="PassportTable" style={{widtd: "100px"}}>
				   <tr className="PassportTableHead"  >
					   <td><h5>Country*</h5></td>
					   <td><h5>No*</h5></td>
					   <td><h5>Date of issue</h5></td>
					   <td><h5>Expiry date*</h5></td>
					   <td><h5>Passport scan</h5></td>
					   <td><h5>Default</h5></td>
				   </tr>
				   <Timezones zones={Value.zones}  delTodo={delTodo}/>
			   </table>
			   <div className='UserHeader'>Ratings</div>
			   <div className="Ratings UserHeader">
			     <div>Aicraft ( type )</div> 
				 <div>Ratings</div> 
			   </div>	         
			   <div className="Ratings RatingsDisplay">
			     <div className="RatingsTitle">B762-762-2002R</div> 
				 <div>
					 <select onChange={handleChange}>
                         <option><span className="threedot">...</span></option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT</option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT2</option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT3</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA1</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA2</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA3</option>
						 <option style={{backgroundColor: 'lightgray'}}>FM</option>
						 <option style={{backgroundColor: 'lightgray'}}>LC</option>
					</select>
				   </div> 
				  <div><span>{"  "+Selectvalue.maps.map(mymap => " "+ mymap+" ")}</span></div>
			   </div>
			   <div className="Ratings RatingsDisplay">
			     <div className="RatingsTitle">CD4E-2l345-HRD</div> 
				 <div>
					 <select onChange={handleChange1}>
                         <option><span className="threedot">...</span></option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT</option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT2</option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT3</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA1</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA2</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA3</option>
						 <option style={{backgroundColor: 'lightgray'}}>FM</option>
						 <option style={{backgroundColor: 'lightgray'}}>LC</option>
					</select>
				   </div> 
				  <div><span>{"  "+Selectvalue1.maps.map(mymap => " "+ mymap+" ")}</span></div>
			   </div>
			   <div className="Ratings RatingsDisplay">
			     <div className="RatingsTitle">FDE-20845-HRD</div> 
				 <div>
					 <select onChange={handleChange2}>
                         <option><span className="threedot">...</span></option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT</option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT2</option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT3</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA1</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA2</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA3</option>
						 <option style={{backgroundColor: 'lightgray'}}>FM</option>
						 <option style={{backgroundColor: 'lightgray'}}>LC</option>
					</select>
				   </div> 
				  <div><span>{"  "+Selectvalue2.maps.map(mymap => " "+ mymap+" ")}</span></div>
			   </div>
			   <div className="Ratings RatingsDisplay">
			     <div className="RatingsTitle">V762-062-8002A</div> 
				 <div>
					 <select onChange={handleChange3}>
                         <option><span className="threedot">...</span></option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT</option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT2</option>
						 <option style={{backgroundColor: 'lightgreen'}}>CPT3</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA1</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA2</option>
						 <option style={{backgroundColor: 'lightblue'}}>FA3</option>
						 <option style={{backgroundColor: 'lightgray'}}>FM</option>
						 <option style={{backgroundColor: 'lightgray'}}>LC</option>
					</select>
				   </div> 
				  <div><span>{"  "+Selectvalue3.maps.map(mymap => " "+ mymap+" ")}</span></div>
			   </div>
			   
			   <form onSubmit={handleSubmit}><div className='SaveUserButtons'><button >save</button><button onClick={() => {setButtonTrue(false)}}>cancel</button><button>Open Full Edit</button></div></form>
		  </AddUser>
		  <button className="AddUserButton" onClick={() => {setButtonTrue(true)}}><span className="plus">+</span> NEW USER</button>
		</div>  
	  )
 }
 export default Tab
 