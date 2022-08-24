import { useState } from "react";
import UserTables from "./UserComponents/userTables.js";
// import Fediting from "./FlightEditing.js";
// import Rhandling from "./ReqHandling.js";
// import Document from "./Document.js"; 
   function Tab(){
// 	const [state,setState] = useState();
// 	const action = (index) => {
// 	  setState(index)
//    }
     return (
        <div className="App">
		  <UserTables />
		  <button className="AddUserButton"><span className="plus">+</span> NEW USER</button>
		</div>  
	  )
 }

 export default Tab