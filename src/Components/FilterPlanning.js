import React, { useState } from 'react';
import '../Styles/Filter.css';


function FilterPlanning () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <>
   <p className='filter-items' onClick={handleClick}>
            <i className={click? 'fas fa-times' : 'show-filter'}></i>
              show filter
          </p>
    
          <div className={click? 'filter-content active' : 'filter-item'}>
             <div className='mytable'>
              <div className='table-tab'>
                <h3>Earlier</h3>
                <h3>Now</h3>
                <h3>Later</h3>
                </div>
              <div className='table-tab-content'>
       
           {/* date code handle */}
                  <p> 
                  <label htmlFor=""> 
                   <span>From</span>   
             <input type="date" name="" id="" className='filter-data-d'/>
             </label> 
                  </p>
                 
    {/* date code handle */}
                  <p>
                  <label htmlFor=""> 
                   <span>To</span>   
             <input type="date" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>
                  
                  <p>
                    <input type="radio" name="" id="" />
                 </p>

                { /*column two begin*/}
             

                  {/* date code handle */}
                <p>
                <label htmlFor=""> 
                   <span>From</span>   
             <input type="date" name="" id=""  className='filter-data-d'/>
             </label> 
                </p>

                {/* date code handle */}
                  <p>
                  <label htmlFor=""> 
                   <span>To</span>   
             <input type="date" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>

                  <p>
                  <input type="radio" name="" id="" />
                  </p>
                {/* column 2 end */}


         {/* column 3 start */}

                   <p>
                   <label htmlFor=""> 
                   <span>Month</span>   
             <input type="month" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>


    {/* date code handle */}
                  <p>
                  <label htmlFor=""> 
                   <span>year</span>   
             <input type="text" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>

                  <p>
               <input type="radio" name="" id="" />
                 </p>

{/* column 3 end */}
              </div>
              
              <div className='table-tab'>
                <h3>Aircraft</h3>
                </div>
                <div className='table-tab-content2'>
                  <p>Airport</p>
                <p>
                <input type="text" name="" id="" className='filter-data-d-sec' />
                  </p>
                <p>Flight Code</p>
               
                <p>
                <input type="text" name="" id=""className='filter-data-d-sec' />
                 </p>
                <p>Item per page</p>
                <p>
                <select id='aircraft' name='Aircraft' className='filter-data-d-sec'><option>--select--</option><option>IATA</option><option>IATA</option><option>IATA</option></select>
                </p>
                  
      <button className='show'>Show</button>

                  </div>
             </div>
          </div>
          </>
          )

}

export default FilterPlanning;