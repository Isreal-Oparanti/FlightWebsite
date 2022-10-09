import React from 'react';
function Ratings(props){
  const Ratingsarr = []
  Ratingsarr.push(props.users.Ratings)
  Ratingsarr.push(props.users.Ratings1)
  Ratingsarr.push(props.users.Ratings2)
  Ratingsarr.push(props.users.Ratings3)
    return (
      <div className="RatingsContainer">
          <table id='Ratingstable' border='1'>
              <tbody>
                    <tr>
                      <th>Type</th>
                      <th>Rating</th>
                      <th>Experienced</th> 
                    </tr>
                {Ratingsarr.map((item) => {    
                  if(item.maps.length !== 0 && item.mapTitles.length !== 0){
                        return(          
                          <tr> 
                              <td>{item.mapTitles}</td>
                              <td><p className="rateParagraph">{item.maps}</p></td> 
                              <td></td>
                          </tr>
                      )
                  }            
                })}
              </tbody>      
          </table> 
          <button className="AddUserButton" style={{height: '35px'}}><span className="plus"></span>Add new ratings</button>    
        
    
      </div>
    )
  }
export default Ratings

