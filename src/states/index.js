import React from 'react';
import {createGlobalState} from 'react-hooks-global-state';

const{setGlobalState, useGlobalState} = createGlobalState({
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
                maintanance: 'ss',
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

export {useGlobalState, setGlobalState};