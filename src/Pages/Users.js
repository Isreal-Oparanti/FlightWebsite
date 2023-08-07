import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UserTableItem from "./Users/components/Add/UserTableItem.js";
import AddUser from "./Users/components/Add/AddUser.js";
import TimezoneItem from './Users/components/Add/TimezoneItem';
import Edit from "./Users/components/Add/FullUserEdit.js";
import scan from "../Assets/images/scan.png";
// import PassportTables from "./UserComponents/passportItem.js";
// import Document from "./FullUserEdit.js";

import BasicInfo from "./Users/components/Add/UserTabComponents/BasicInfo.js";
import Endorsement from "./Users/components/Add/UserTabComponents/Endorsement.js";
import Ratings from "./Users/components/Add/UserTabComponents/Ratings.js"; 
import LoginHistory from "./Users/components/Add/UserTabComponents/LoginHistory.js";
function Tab() {
	const [btnstyle,setBtnstyle] = useState(true)
	var val1 = '1px solid #D3D3D3'
	var val2 = '1px solid red'
	 
	if(btnstyle === true){
		var val = 0.3;
	}else{
		 val = 1
	}
	const BtnStyle = {
		opacity: val
	}
 	const [tabstate,setTabState] = useState(1);
	const tabaction = (index) => {
	  setTabState(index)
    }
    /**Validating input state */
	const [Mustfill,setMustfill] =useState({border: val1})
	const [Mustfill1,setMustfill1] =useState({border: val1})
	const [Mustfill2,setMustfill2] =useState({border: val1})
	const [Mustfill3,setMustfill3] =useState({border: val1})
	const [Mustfill4,setMustfill4] =useState({border: val1})
	const [Mustfill5,setMustfill5] =useState({border: val1})
	const [Mustfill6,setMustfill6] =useState({color: 'rgba(0, 0, 0, 0.86)'})
	/**fullEdit popup state */
	const [enableUserEdit,setenableUserEdit] = useState(false);
	const [ButtonTrue1,setButtonTrue1] = useState(false);
	const [fulledit,setfulledit] = useState();
	const [search, setSearch] = useState('');
	

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
	// const handleDate = () =>{
	// 	return new Date().toISOString().slice(0,10);
	// }
	// console.log(handleDate())
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
	  const	group = [
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
	  const	group1 = [];
	  	  group.map((ele) => {
			if(ele.name !== e.target.value){
				group1.push(ele)  
			}
	  }) 
		setUsers((prev) =>{
			return {...prev, notselectedgroup: [...group1], selectedgroup: [{name: e.target.value, id: uuidv4()}]}	
		})	
	}
	const [Users, setUsers] = useState({
		name: '',
		middlename:'',
		surname:'',
		code: '',
		login: '',
		homebase1: '',
		homebase2: '',
		email: '',
		gender: '',
		selectedgroup: [],
		notselectedgroup: [],
		Ratings: Selectvalue,
		Ratings1: Selectvalue1,
		Ratings2: Selectvalue2,
		Ratings3: Selectvalue3,
		no: '',
		date_of_issue: '',
		expiry_date: ''
	});
	
//****User state*********///
	const [state,setState] = useState({
		users: [ 
			{
			name: 'Abbott Micheal',
			code: 'GNR',
			login: 'CHB',
			homebase1: 'SMJ',
			homebase2: 'DGN',
			email: 'Abbort@preairways.com',
			selectedgroup: Users.selectedgroup,
			notselectedgroup: Users.notselectedgroup,
			lastvisit: "14-12-2021 10:23 ",
			Ratings: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'},
			Ratings1: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'},
			Ratings2: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'},
			Ratings3: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'}
		   },
		  {
			name: 'Willson Smart',
			code: 'GNR',
			login: 'CHB',
			homebase1: 'PDF',
			homebase2: 'CHM',
			email: 'Abbort@preairways.com',
			selectedgroup: Users.selectedgroup,
			notselectedgroup: Users.notselectedgroup,
			lastvisit: "14-12-2021 10:23 ",
			Ratings: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'},
			Ratings1: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'},
			Ratings2: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'},
			Ratings3: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'}

		  }, 
		  {
			name: 'Micheal Jackson',
			code: 'GNR',
			login: 'CHB',
			homebase1: 'COP',
			homebase2: 'CHM',
			email: 'Abbort@preairways.com',
			lastvisit: "14-12-2021 10:23 ",
			selectedgroup: Users.selectedgroup,
			notselectedgroup: Users.notselectedgroup,
			Ratings: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'},
			Ratings1: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'},
			Ratings2: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'},
			Ratings3: {maps: ['CTP', 'FA1' ], mapTitles: 'B762-762-2002R'}
		}
	]
	});
	const onChange = (e) => {
	 
		const {name, value} = e.target;
		setUsers((prev) =>{
    		return {...prev, [name]: value}
			
		})
		if(e.target.value !== ''){
		   setBtnstyle(false) 
		}else{
			setBtnstyle(true)
		}

	}

	const [Value, setValue] = useState({
		zones:[
			{
			  country: '',  
				no:  '',
				date_of_issue:  '',
				expiry_date:  '',
				passport: '',
				default: '',
				id: uuidv4()
			 	 	
			}
		],	   	
	 })

	const addUser = () => {
		  const newUser = {
				name: Users.name +" "+ Users.middlename +" "+ Users.surname,
				code: Users.code,
				login: Users.login,
				email: Users.email,
				homebase1: Users.homebase1,
				homebase2: Users.homebase2,
				selectedgroup: Users.selectedgroup,
				notselectedgroup: Users.notselectedgroup,
				lastvisit: "14-12-2021 10:23",
				Ratings: Selectvalue,
				Ratings1: Selectvalue1,
				Ratings2: Selectvalue2,
				Ratings3: Selectvalue3,
				no: Users.no
			}
			  setState({ users:[...state.users, newUser]})	 
	}

	const {name,surname,code,homebase1,login,gender,selectedgroup} = Users
	const handleSubmit = (e) => {
	
		e.preventDefault();

		if(name.length === 0){
		   setMustfill({border : val2})  
		}
		else if(surname.length === 0){
			setMustfill1({border : val2})
		}
		else if(code.length === 0){
			setMustfill2({border : val2})
		}
		else if(homebase1.length === 0){
			setMustfill3({border : val2})
		}
		else if(login.length === 0){
			setMustfill4({border : val2})
		} 
		else if(selectedgroup.length === 0){
			setMustfill5({border : val2})
		}
		else if(gender.length === 0){
			setMustfill6({color : 'red'})
		}
		else{
			setMustfill({border : val1})
			setMustfill1({border : val1})
			setMustfill2({border : val1})
			setMustfill3({border : val1})
			setMustfill4({border : val1})
			setMustfill5({border : val1})
			setMustfill6({border : 'rgba(0, 0, 0, 0.86)'})
			addUser()
			setenableUserEdit(false)
		}
	}
	 const delTodo = (id) => {
	    setValue({zones: [...Value.zones.filter(zone => zone.id !== id)] })
	}

	const onSubmit = (e) => {
			e.preventDefault();
			addTimezone();	
	}
	const addTimezone = () => {
		
		const newTodo = {
			country: '',  
			no:  '',
			date_of_issue:  '',
			expiry_date:  '',
			passport: '',
			default: '',
			id: uuidv4()
	   }   
		   setValue({ zones:[...Value.zones, newTodo]});
 	}
	
	const handleGender = (e) => {
		setUsers((prev) =>{
			return {...prev, gender: e.target.id}	
		})	
	}
	// const handleFulledit = (e) => {
	// 	//  setfulledit(e.target);
	// 	 //btn(true);
	// }
	// var btn;
	// const handleFulledit1 = (Button,setButton) => {
	// 	//   btn = setButton
	// } 
	const openfulledit = () => {
		 setUsers((prev) =>{ return {...prev, Ratings: Selectvalue}})
		 setUsers((prev) =>{ return {...prev, Ratings1: Selectvalue1}})
		 setUsers((prev) =>{ return {...prev, Ratings2: Selectvalue2}})
		 setUsers((prev) =>{ return {...prev, Ratings3: Selectvalue3}})
		    
	}
  return (
    <div className="UserApp">
			<div className="SearchInputs">
			   <input type="text" className="SearchInput" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
			   <label>Filter users by: </label><select><option>Active & Delected</option><option>Active</option><option>Delected</option><option>All</option></select>
			</div>
		  <table className="UserTable" border='1'  >
				<tr className='UserTableHead' >
				    <td><span className='hrline'></span>Name</td>
					<td className='code'>Code</td>
					<td className='code'>Login</td>
					<td className='Email'>Email</td>
					<td className='status'>Status</td>
					<td className="group">Group</td>
					<td className='lastvisit'>Last Visit Date</td>
					<td className='edit'>Full edit</td>
				</tr>
						<UserTableItem   
								User={state.users} 
								Value={Value} 
								delTodo={delTodo} 
								onSubmit={onSubmit}
						/>
			</table>	
		  <AddUser trigger={enableUserEdit} setTrigger={setenableUserEdit}>
			   <h5 style={{textAlign: "center", fontSize: '20px', marginBottom: "8px"}}>USER EDIT</h5>
			   <hr/>
			   <div className='UserHeader'>person</div>
			   <div className="AddUsersForm" id="firstChild"> 
					<div><label htmlFor="name">Name*</label></div>
					<div><input type="text" name="name" placeholder="Name" id="username" style={Mustfill} onChange={onChange}/></div>
					<div><label htmlFor="sex" id="alignSex">Sex*</label></div>
					<div><div className="userName"><span style={Mustfill6}>M</span><input type="radio"  name="sex"  id="male" onClick={handleGender}/><span style={Mustfill6}>F</span><input type="radio" name="sex" id='female' onClick={handleGender}/></div></div>
               </div>
			   <div className="AddUsersForm"> 
					<div><label htmlFor="name">Middle name</label></div>
					<div><input type="text"  id="middlename" name="middlename" placeholder="Middle Name"  onChange={onChange} /></div>
					<div><label htmlFor="sex">DoB</label></div>
					<div><input type="text" name="name" /></div>
               </div>
			   <div className="AddUsersForm"> 
					<div><label htmlFor="name">Surname*</label></div>
					<div><input type="text"  id="surname" name="surname" style={Mustfill1} placeholder="Surname" onChange={onChange}/></div>
					<div><label htmlFor="sex">Phone</label></div>
					<div><input type="text" name="name" /></div>
               </div>
			   <div className="AddUsersForm">
			        <div><label htmlFor="name">Labels</label></div>
					<div><select><option>...</option></select></div> 
					<div><label htmlFor="email">E-mail</label></div>
					<div><input type="email" name="email" onChange={onChange} /></div>
               </div>
			   <div className="AddUsersForm"> 
			        <div><label htmlFor="name" >Code*</label></div>
					<div><input type="text"  id="code" name="code" style={Mustfill2} placeholder="Code" onChange={onChange} /></div>
					<div><label htmlFor="sex">Company</label></div>
					<div><input type="text" name="name" placeholder="Seach Company"  /></div>
               </div>
			   <div className="AddUsersForm"> 
			        <div><label htmlFor="name">Homebase 1*</label></div>
					<div><input type="text" name="homebase1" style={Mustfill3} onChange={onChange} /></div>
					<div><label htmlFor="sex">Login*</label></div>
					<div><input type="text"  id="login" name="login" style={Mustfill4} onChange={onChange} /></div>
               </div>
 
			   <div className="AddUsersForm"> 
			        <div><label>Permission Group*</label></div>
							<div><select style={Mustfill5} onChange={handleSelect}><option>Admin</option><option>crew</option><option>OPS</option><option>sales</option><option>basic</option></select></div>
							<div><label htmlFor="sex">Homebase 2</label></div>
							<div><input type="text" name="homebase2"  onChange={onChange} /></div>
         </div>
			   
			   <form onSubmit={onSubmit}>
			     <div className='UserHeader'>Passports<button>NEW PASSPORT</button></div>
			   </form>
			   <div className="addspace"></div>
           <table className="PassportTable" style={{width: "100%"}}>
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
            {Value.zones.map((item) => (
               <TimezoneItem 
							     item={item} 
									 value={Value}
									 key={item.id}  
									 onChange={onChange} 
									 delTodo={delTodo}
							 />     
         ))}

						{/* <Timezones zones={Value.zones}  delTodo={delTodo}/> */}
      </table>
        <div className="UserHeader">Ratings</div>
        <div className="Ratings UserHeader">
          <div>Aicraft ( type )</div>
          <div>Ratings</div>
        </div>
        <div className="Ratings RatingsDisplay">
          <div className="RatingsTitle">B762-762-2002R</div>
          <div>
            <select onChange={handleChange}>
              <option>
                <span className="threedot">...</span>
              </option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT</option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT2</option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT3</option>
              <option style={{ backgroundColor: "lightblue" }}>FA1</option>
              <option style={{ backgroundColor: "lightblue" }}>FA2</option>
              <option style={{ backgroundColor: "lightblue" }}>FA3</option>
              <option style={{ backgroundColor: "lightgray" }}>FM</option>
              <option style={{ backgroundColor: "lightgray" }}>LC</option>
            </select>
          </div>
          <div>
            <span>
              {"  " + Selectvalue.maps.map((mymap) => " " + mymap + " ")}
            </span>
          </div>
        </div>
        <div className="Ratings RatingsDisplay">
          <div className="RatingsTitle">CD4E-2l345-HRD</div>
          <div>
            <select onChange={handleChange1}>
              <option>
                <span className="threedot">...</span>
              </option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT</option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT2</option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT3</option>
              <option style={{ backgroundColor: "lightblue" }}>FA1</option>
              <option style={{ backgroundColor: "lightblue" }}>FA2</option>
              <option style={{ backgroundColor: "lightblue" }}>FA3</option>
              <option style={{ backgroundColor: "lightgray" }}>FM</option>
              <option style={{ backgroundColor: "lightgray" }}>LC</option>
            </select>
          </div>
          <div>
            <span>
              {"  " + Selectvalue1.maps.map((mymap) => " " + mymap + " ")}
            </span>
          </div>
        </div>
        <div className="Ratings RatingsDisplay">
          <div className="RatingsTitle">FDE-20845-HRD</div>
          <div>
            <select onChange={handleChange2}>
              <option>
                <span className="threedot">...</span>
              </option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT</option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT2</option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT3</option>
              <option style={{ backgroundColor: "lightblue" }}>FA1</option>
              <option style={{ backgroundColor: "lightblue" }}>FA2</option>
              <option style={{ backgroundColor: "lightblue" }}>FA3</option>
              <option style={{ backgroundColor: "lightgray" }}>FM</option>
              <option style={{ backgroundColor: "lightgray" }}>LC</option>
            </select>
          </div>
          <div>
            <span>
              {"  " + Selectvalue2.maps.map((mymap) => " " + mymap + " ")}
            </span>
          </div>
        </div>
        <div className="Ratings RatingsDisplay">
          <div className="RatingsTitle">V762-062-8002A</div>
          <div>
            <select onChange={handleChange3}>
              <option>
                <span className="threedot">...</span>
              </option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT</option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT2</option>
              <option style={{ backgroundColor: "lightgreen" }}>CPT3</option>
              <option style={{ backgroundColor: "lightblue" }}>FA1</option>
              <option style={{ backgroundColor: "lightblue" }}>FA2</option>
              <option style={{ backgroundColor: "lightblue" }}>FA3</option>
              <option style={{ backgroundColor: "lightgray" }}>FM</option>
              <option style={{ backgroundColor: "lightgray" }}>LC</option>
            </select>
          </div>
          <div>
            <span>
              {"  " + Selectvalue3.maps.map((mymap) => " " + mymap + " ")}
            </span>
          </div>
        </div>
        <div className='SaveUserButtons'>
          <form onSubmit={handleSubmit} style={{display: 'inline'}}>
            <button 
               style={BtnStyle} 
               disabled={btnstyle}>
               save
            </button>
          </form>

        <button 
            onClick={() => {
                setenableUserEdit(false)
            }}>
            cancel
        </button>
           <button 
                style={BtnStyle}  
                disabled={btnstyle} 
                onClick={() => {
                        {/* if(name.length === 0 || surname.length === 0 || code.length === 0 || 
                        homebase1.length === 0 || login.length === 0 || gender.length === 0 || 
                  selectedgroup 	.length === 0){
        
                    alert('Fill all fields with Asterisks (*) to open full edit')					
                }else{
                                setButtonTrue1(true)
                }						  */}
                setButtonTrue1(true)
                openfulledit()
              }}>
              Open Full Edit
           </button>
         </div>
      </AddUser>

      <button 
         className="AddUserButton" 
         onClick={() => {
           setenableUserEdit(true)
           }}>
         <span className="plus">
           +
         </span> NEW USER
      </button>
    
     		<Edit trigger={ButtonTrue1} setTrigger={setButtonTrue1} >
                <h1 className="UserHeaderText">{Users.name +" "+Users.middlename+" "+Users.surname}{' '}({Users.login})</h1>
					   {/* <h1 className="UserHeaderText">{Users.name +" "+Users.middlename+" "+Users.surname}{' '}({Users.login})</h1> */}
           <div className="ReqApp" style={{borderBottom: '2px solid #999'}}>
			     <div className="tab1_container"style={{width: "50%", fontSize: '11.83px'}}>
                        <div onClick={()=>tabaction(1)} className={`${tabstate===1? 'tab1 active-tab' : 'tab1'}`}><span>Basic Information</span></div>
                        <div onClick={()=>tabaction(2)} className={`${tabstate===2? 'tab1 active-tab' : 'tab1'}`}><span>Personanl Endorsements</span></div>
                        <div onClick={()=>tabaction(3)} className={`${tabstate===3? 'tab1 active-tab' : 'tab1'}`}><span>Ratings</span></div>
                        <div onClick={()=>tabaction(4)} className={`${tabstate===4? 'tab1 active-tab' : 'tab1'}`}><span>User settings</span></div>
					<section id="content1" className={`${tabstate===1? 'tab-content1 active-content':'tab-content'}`}>
					      <BasicInfo user={Users} />
					</section>
					<section id="content3" className={`${tabstate===2? 'tab-content1 active-content':'tab-content'}`}> 
					        <Endorsement />  
					</section>
					<section id="content4" className={`${tabstate===3? 'tab-content1 active-content':'tab-content'}`}> 
			            <Ratings users={Users}/>
					</section>
          <section id="content5" className={`${tabstate===4? 'tab-content1 active-content':'tab-content'}`}>
			           <LoginHistory />
					</section>
				 </div>
			  </div>
            <button id="Update" style={{marginLeft: 0}} >Update</button>   
            </Edit>        
        </div>
  )
}
export default Tab;