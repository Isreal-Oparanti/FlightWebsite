import React, {useState} from 'react';
import Tabs from "../components/Tabs";
import EndorsementList from './CrewEndorsementTabComp/EndorsementList.js'
import MailingRules from './CrewEndorsementTabComp/mailingRules.js'

function Cockpit({Aircraft}){  
        return (
            <div>
               <div className="ReqApp" style={{ borderBottom: "2px solid #000" }}>
                <Tabs
                  items={[
                    { label: "Endorsements List", content: EndorsementList },
                    { label: "Mailing Rules", content: MailingRules }
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


 