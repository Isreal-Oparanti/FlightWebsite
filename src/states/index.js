import React from 'react';
import { v4 as uuidv4 } from "uuid";
import {createGlobalState} from 'react-hooks-global-state';
const{setGlobalState, useGlobalState} = createGlobalState({
        endorse: [ 
            {
                id: uuidv4(),
                endorsement: 'Medical',
                cockpit: 'cpt1',
                cabin: 'fa1',
                ground: '',
                maintanance: '',
                aircraftType: 'C56X Licence',
                endorsementType: 'licence',
                number:  '123456',
                date_of_issue: '12-03-2020',
                expiry_date: '12-30-2020',

           },
           {     
                id: uuidv4(),
                endorsement: 'Line Check',
                cockpit: 'cpt',
                cabin: '',
                ground: '',
                maintanance: 'ss',
                aircraftType: 'all' ,
                endorsementType: '',
                number: '4875599',
                date_of_issue: '12-21-2020',
                expiry_date: '12-30-2030',
           }, 
           { 
                id: uuidv4(),
                endorsement: 'Nigeria Visa',
                cockpit: 'cpt2',
                cabin: 'fa5',
                ground: '',
                maintanance: 'd',
                aircraftType: 'all',
                endorsementType: 'visa' ,
                number: '3822663',
                date_of_issue: '12-18-2022',
                expiry_date: '12-20-2022',
           }
    ]
     
})

export {useGlobalState, setGlobalState};