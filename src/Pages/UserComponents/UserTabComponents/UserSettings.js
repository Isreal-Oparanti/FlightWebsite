import React from 'react';  
function Ratings(){
    return (
        <div className="Usersettings">
            <div className="GS">    
                <div id="cont"><label htmlFor="date"><span>Enter Date<span id="smalls"> (Format: month/day/year)</span></span></label></div>
                <div><span><input type="date" id='date'/></span></div>
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="fuel"><span>Display airport code as</span></label></div>
                <div><input  type="radio" name="radio" id="fuel" className="inputs radio first" defaultChecked={true} /><span>IATA</span><input type="radio" name="radio" id="fuel" className="inputs radio" /><span>ICAO</span></div>
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="weight"><span>Show statuses of lef info ont tooltip</span></label></div>
                <div><input type="radio" name="weight-radio" id="weight" className="inputs radio first" defaultChecked={true} /><span>Yes</span><input  type="radio" name="weight-radio"  id="weight" className="inputs radio" /><span>no</span></div>
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="fuel"><span>Used Time</span></label></div>
                <div><input  type="radio" name="radio" id="fuel" className="inputs radio first" defaultChecked={true} /><span>UTC</span><input type="radio" name="radio" id="fuel" className="inputs radio" /><span>LT</span></div>
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Automatically change to date on flights list when from date is changed</span></label></div>
                <div><input type='checkbox' /></div>    
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Prefared flight view</span></label></div>
                <div><select id='region'><option>Flight List</option></select></div>        
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Display name of operators</span></label></div>
                <div><input type='checkbox' /></div>    
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Display name of maintanances</span></label></div>
                <div><input type='checkbox' /></div>    
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Notify about duty roaster changes</span></label></div>
                <div><input type='checkbox'  defaultChecked={true}/></div>    
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Include maintanances in "My flight's" calender</span></label></div>
                <div><input type='checkbox' defaultChecked={true} /></div>    
            </div>  
        </div>  
    )
  }

export default Ratings