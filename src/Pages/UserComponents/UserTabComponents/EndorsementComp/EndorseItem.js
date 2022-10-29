import React,{ useState } from 'react'; 

function Endorse(props){
    const [value, setValue] = useState(props.ele.number)
    const [value1, setValue1] = useState(props.ele.date_of_issue)
    const [value2, setValue2] = useState(props.ele.expiry_date)
    const handleChange = (ele) => {
        setValue(ele.target.value)
        props.endorse.map((e) =>{
            if(e.id === props.item){
                e.number = value;
            }
        })
    }
    const handleChange1 = (ele) => {
        setValue1(ele.target.value)
        props.endorse.map((e) =>{
            if(e.id === props.item){
                e.date_of_issue = value1;
            }
        })
    }
    const handleChange2 = (ele) => {
         // if(ele.target.value == 'xxx' || ele.target.value == 'XXX'){
        //    value2 = 'Never';
        // }
        setValue2(ele.target.value)
        props.endorse.map((e) =>{
            if(e.id === props.item){
                
                e.expiry_date = value2;
            }
             
        })
    }
         return(
           <>
                <tr id='passportTablerow' >
                    <td>{props.ele.endorsement}</td>
                    <td><input type='text' style={{width: '95px'}} value={value} onChange={handleChange} /></td>
                    <td><input type='text' style={{width: '80px'}} value={value1} onChange={handleChange1}/></td>
                    <td><input type='text' style={{width: '80px'}} value={value2} onChange={handleChange2}/></td>
                    <td></td>
                    <td id='aircraftType'><input type='text'  style={{width: '150px'}}/></td>
                    <td style={{fontSize: '10px'}}>(max 100mb)<div className='file-upload'>
                            <label for="file-input">
                                add new files
                            </label>
                            <input id="file-input" type='file'/>	   
                    </div></td>
                </tr>
               
           </>
       )     
}
 export default Endorse; 