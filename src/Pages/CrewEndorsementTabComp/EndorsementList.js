import React, {useState,useEffect} from 'react';
import Modal from '../../components/Modal'
import AddEndorse from './EndorsementTabComp/newEndorse'
import TableRow from './EndorsementTabComp/tablerow'
function Endorsement(){
  
  const [newEndorse, setNewEndorse] = useState(false);
  const [state, setState] = useState({
    validityTime: 0,
    revalidationDays: 0       
   })

  const [endorse, setEndorse] = useState({
    endorsement: '',
    cockpit: '',
    cabin: '',
    ground: '',
    maintanance: '',
    aircraftType: ''
});
   

  const [endorsement, setEndorsement] = useState({
    endorse: [ 
        {
            endorsement: 'Medical',
            cockpit: 'cpt1',
            cabin: 'fa1',
            ground: '',
            maintanance: '',
            aircraftType: 'C56X Licence',
            endorsementType: 'licence' 
       },
       {
        endorsement: 'Line Check',
        cockpit: 'cpt',
        cabin: '',
        ground: '',
        maintanance: 'ssn',
        aircraftType: 'all' ,
        endorsementType: ''
       }, 
       {
        endorsement: 'Nigeria Visa',
        cockpit: 'cpt2',
        cabin: 'fa5',
        ground: '',
        maintanance: 'd',
        aircraftType: 'all',
        endorsementType: 'visa' 
       }
]
})

const addEndorse = () => {
  const newEndorse = {
        endorsement: endorse.endorsement,
        aircraftType: endorse.aircraftType,
        endorsementType: endorse.endorsementType,
        cockpit: endorse.cockpit,
        cabin: endorse.cabin,
        ground: endorse.ground,
        maintanance: endorse.maintanance,
        warn: endorse.warn,
        validityTime: endorse.validityTime,
        revalidationDays: endorse.revalidationDays
    }
      setEndorsement({ endorse:[...endorsement.endorse, newEndorse]})	 
}

// console.log(endorsement)
const onChange = (e) => { 
  
     const {name, value} = e.target;
     setState({name: value})
     setEndorse((prev) =>{
         return {...prev, [name]: value}
         
     })

    
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(endorse.endorsement !== ''){
      addEndorse();
      setNewEndorse(false)	
    }else{
      alert('Field with asterisks must be filled')
    }
    
   
  }   
        return (
        <div id='CrewEndorse'>
           {newEndorse && (
              <Modal
                type="medium2"
                content={<AddEndorse 
                             onChange={onChange} 
                             setEndorse={setEndorse} 
                             state={state}
                             endorse={endorse} 
                             onSubmit={onSubmit}
                             setNewEndorse={setNewEndorse}
                          />}
                visible={newEndorse}
                setVisible={setNewEndorse}
              />
            )}
          <button 
             className="AddUserButton" 
             onClick={()=> setNewEndorse(true)}>
             New endorsement
         </button>
          <table className="PassportTable" >
						<tr id="PassportTableHead">
							<td>Endorsement</td>
              <td>Cockpit</td>
							<td>Cabin</td>
              <td>Ground</td>
							<td>Maintanance</td>
							<td id='aircraftType'>Aircraft type</td>
              <td></td>
						</tr>

            <TableRow state={endorsement}/>
          </table>        
        </div>
          
       )
     }
export default Endorsement;


 