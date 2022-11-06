import React from "react";
import Tabs from "../../../../components/Tabs";
import BasicInfo from "./BasicInfo";
import Endorsement from "./Endorsement";
import Ratings from "./Ratings";
import userSettings from "./UserSettings";

function Edit() {
  return (
    
    <>
      <h1>John Doe</h1>
      <div className="ReqApp" style={{ borderBottom: "2px solid #999" }}>
        <Tabs
          items={[
            { label: "Basic Information", content: BasicInfo },
            { label: "Personal Endorsements", content: Endorsement },
            { label: "Ratings", content: Ratings },
            { label: "User settings", content: userSettings },
          ]}
        />
      </div>
      <button id="Update" style={{ marginLeft: 0 }}>
        Update
      </button>
    </>
  );
}

export default Edit;
