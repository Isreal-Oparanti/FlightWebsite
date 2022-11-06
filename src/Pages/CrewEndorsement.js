import React, {useState} from 'react';
import Tabs from "../components/Tabs";
import EndorsementList from './CrewEndorsementTabComp/EndorsementList.js'

function Cockpit({Aircraft}){  
        return (
            <div>
               <div className="ReqApp" style={{ borderBottom: "2px solid #000" }}>
                <Tabs
                  items={[
                    { label: "Endorsements List", content: EndorsementList },
                    { label: "Groups", content: EndorsementList }
                  ]}
                />
                </div>
                <button id="Update">
                  Update
                </button>
            </div>
        )
     }
export default Cockpit;


 