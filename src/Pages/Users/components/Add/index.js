import React from "react";

const Add = () => {
  return (
    <>
      <h5
        style={{
          textAlign: "center",
          fontSize: "20px",
          marginBottom: "8px",
        }}>
        USER EDIT
      </h5>
      <hr />
      <div className="UserHeader">person</div>
      <div className="AddUsersForm" id="firstChild">
        <div>
          <label htmlFor="name">Name*</label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="username"
            // style={Mustfill}
            // onChange={()=>{}}
          />
        </div>
        <div>
          <label htmlFor="sex" id="alignSex">
            Sex*
          </label>
        </div>
        <div>
          <div className="userName">
            <span>M</span>
            <input type="radio" name="sex" id="male" onClick={() => {}} />
            <span>F</span>
            <input type="radio" name="sex" id="female" onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className="AddUsersForm">
        <div>
          <label htmlFor="name">Middle name</label>
        </div>
        <div>
          <input
            type="text"
            name="middlename"
            placeholder="Middle Name"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="sex">DoB</label>
        </div>
        <div>
          <input type="text" name="name" />
        </div>
      </div>
      <div className="AddUsersForm">
        <div>
          <label htmlFor="name">Surname*</label>
        </div>
        <div>
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="sex">Phone</label>
        </div>
        <div>
          <input type="text" name="name" />
        </div>
      </div>
      <div className="AddUsersForm">
        <div>
          <label htmlFor="name">Labels</label>
        </div>
        <div>
          <select>
            <option>...</option>
          </select>
        </div>
        {/* <div><label htmlFor="name">Known as*</label></div>
                            <div><input type="text" name="name"  onChange={()=>{}}/></div> */}
        <div>
          <label htmlFor="email">E-mail</label>
        </div>
        <div>
          <input type="email" name="email" onChange={() => {}} />
        </div>
      </div>
      <div className="AddUsersForm">
        <div>
          <label htmlFor="name">Code*</label>
        </div>
        <div>
          <input
            type="text"
            name="code"
            placeholder="Code"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="sex">Company</label>
        </div>
        <div>
          <input type="text" name="name" placeholder="Seach Company" />
        </div>
      </div>
      <div className="AddUsersForm">
        <div>
          <label htmlFor="name">Homebase 1*</label>
        </div>
        <div>
          <input type="text" name="homebase1" onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="sex">Login*</label>
        </div>
        <div>
          <input type="text" name="login" onChange={() => {}} />
        </div>
      </div>

      <div className="AddUsersForm">
        <div>
          <label>Permission Group*</label>
        </div>
        <div>
          <select onChange={() => {}}>
            <option>crew</option>
            <option>Admin</option>
          </select>
        </div>
        <div>
          <label htmlFor="sex">Homebase 2</label>
        </div>
        <div>
          <input type="text" name="homebase2" onChange={() => {}} />
        </div>
      </div>
      <div className="AddUsersForm"></div>
      <form onSubmit={() => {}}>
        <div className="UserHeader">
          Passports<button>NEW PASSPORT</button>
        </div>
      </form>
      <table className="PassportTable" style={{ widtd: "100px" }}>
        <tr className="PassportTableHead">
          <td>
            <h5>Country*</h5>
          </td>
          <td>
            <h5>No*</h5>
          </td>
          <td>
            <h5>Date of issue</h5>
          </td>
          <td>
            <h5>Expiry date*</h5>
          </td>
          <td>
            <h5>Passport scan</h5>
          </td>
          <td>
            <h5>Default</h5>
          </td>
        </tr>
        {/* <Timezones zones={Value.zones} delTodo={delTodo} /> */}
      </table>
      <div className="UserHeader">Ratings</div>
      <div className="Ratings UserHeader">
        <div>Aicraft ( type )</div>
        <div>Ratings</div>
      </div>
      <div className="Ratings RatingsDisplay">
        <div className="RatingsTitle">B762-762-2002R</div>
        <div>
          <select onChange={() => {}}>
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
            {/* {"  " + Selectvalue.maps.map((mymap) => " " + mymap + " ")} */}
          </span>
        </div>
      </div>
      <div className="Ratings RatingsDisplay">
        <div className="RatingsTitle">CD4E-2l345-HRD</div>
        <div>
          <select onChange={() => {}}>
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
            {/* {"  " + Selectvalue1.maps.map((mymap) => " " + mymap + " ")} */}
          </span>
        </div>
      </div>
      <div className="Ratings RatingsDisplay">
        <div className="RatingsTitle">FDE-20845-HRD</div>
        <div>
          <select onChange={() => {}}>
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
            {/* {"  " + Selectvalue2.maps.map((mymap) => " " + mymap + " ")} */}
          </span>
        </div>
      </div>
      <div className="Ratings RatingsDisplay">
        <div className="RatingsTitle">V762-062-8002A</div>
        <div>
          <select onChange={() => {}}>
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
            {/* {"  " + Selectvalue3.maps.map((mymap) => " " + mymap + " ")} */}
          </span>
        </div>
      </div>
      <div className="SaveUserButtons">
        <form onSubmit={() => {}}>
          <button>save</button>
        </form>
        <button onClick={() => {}}>cancel</button>
        <button onClick={() => {}}>Open Full Edit</button>
      </div>
    </>
  );
};

export default Add;
