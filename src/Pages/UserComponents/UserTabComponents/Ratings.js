
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
                    <td>{props.Rate.mapTitles}</td>
                    <td>{props.Rate.maps.map(rate => <p className="rateParagraph">{rate}</p>)}</td> 
                    <td><input type="checkbox" defaultChecked={true}/></td>
                  </tr>
                  <tr>
                    <td>{props.Ratings1.mapTitles}</td>
                    <td><div>{props.Ratings1.maps.map(rate => <p className="rateParagraph">{rate}</p>)}</div></td> 
                  </tr>
                  <tr>
                    <td>{props.Ratings2.mapTitles}</td>
                    <td><div>{props.Ratings2.maps.map(rate => <p className="rateParagraph">{rate}</p>)}</div></td> 
                  </tr>
                  <tr>
                    <td>{props.Ratings3.mapTitles}</td>
                    <td><div>{props.Ratings3.maps.map(rate => <p className="rateParagraph">{rate}</p>)}</div></td> 
                  </tr>
             </tbody>      
           </table> 
           <button className="AddUserButton" style={{height: '35px'}}><span className="plus"></span>Add new ratings</button>    
        </div>
          
    )
  }
export default Ratings

