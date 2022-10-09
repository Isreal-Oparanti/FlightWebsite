import React from 'react';
function UserHistory() {
  return (
    <>
      <div className="LoginHistory">
        <h1>USER LOGIN HISTORY</h1>  
      </div>
      <div className="LoginHistory">
         <label>DATE:</label><div>09-10-2022</div>
      </div>
      <div className="LoginHistory">
          <label>TIME:</label><div>2:20PM</div>
      </div>
      <div className="LoginHistory">
        <label>Login attempts:</label><div>2</div>
      </div>
   </>
  );
}

export default UserHistory;
