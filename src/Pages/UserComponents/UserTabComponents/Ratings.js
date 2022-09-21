import React from 'react';
function Ratings(props){
    return (
        <div className="RatingsContainer">
           <table id='Ratingstable' border='1'>
             <tbody>
                  <tr>
                    <th>Type</th>
                    <th>Rating</th>
                    <th>Experienced</th> 
                  </tr>
                  <tr>
                    <td>{props.users.Ratings.mapTitles}</td>
                    <td>{props.users.Ratings.maps.map(rate => <p className="rateParagraph">{rate}</p>)}</td> 
                    <td><input type="checkbox" defaultChecked={true}/></td>
                  </tr>
                  <tr>
                    <td>{props.users.Ratings1.mapTitles}</td>
                    <td>{props.users.Ratings1.maps.map(rate => <p className="rateParagraph">{rate}</p>)}</td>
                    <td></td> 
                  </tr>
                  <tr>
                    <td>{props.users.Ratings2.mapTitles}</td>
                    <td>{props.users.Ratings2.maps.map(rate => <p className="rateParagraph">{rate}</p>)}</td> 
                    <td></td>
                  </tr>
                  <tr>
                    <td>{props.users.Ratings3.mapTitles}</td>
                    <td>{props.users.Ratings3.maps.map(rate => <p className="rateParagraph">{rate}</p>)}</td> 
                    <td></td>
                  </tr>
             </tbody>      
           </table> 
           <button className="AddUserButton" style={{height: '35px'}}><span className="plus"></span>Add new ratings</button>    
        </div>
          
    )
  }
export default Ratings

