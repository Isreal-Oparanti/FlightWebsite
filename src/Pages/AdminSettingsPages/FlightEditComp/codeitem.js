import React, {useState} from 'react';

function Code(props){
    const [value, setValue] = useState('')
    
    const handleChange = (ele) => {
        setValue(ele.target.value)
        props.code.codes.map((e) =>{
            if(e.id === props.item){
                e.value1 = value;
            }
        })
    }
    const handleChange1 = (ele) => {
        setValue(ele.target.value)
        props.code.codes.map((e) =>{
            if(e.id === props.item){
                e.value2 = value;
            }
        })
    }
    console.log(props.code)
         return (
            <div  className="Fsettings FsettingStyle"> 
                <div><label htmlFor="radio1">Code</label><input type="text" id="codeStyle" name="check1" maxLength='6' onChange={handleChange}  /></div>
                <div><input type="text"  name='check1' onChange={handleChange1} /></div>
            </div>          
       )
     }
export default Code;


 