
import React from "react";
// import {ModalBackground, ModalContent} from './style.js'
import styled from 'styled-components';


const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px 0px 0px 0px !important;
    background-color: #fff;
    display: flex;
    height: 100%;  
    `
const ModalContent = styled.div`
    width: 100%;
    position: relative; 
    padding: 0px 10px 10px 10px;    
    background-color: #fff;
    overflow-y: auto !important; 
    `


const Full = ({ content, setVisible}) => (
 <ModalBackground>
    <ModalContent>
      <button className="back-btn" onClick={() => setVisible(false)}>
        <span className="btn-span">Back</span>&#171;&#171;
      </button>
      {content}
    </ModalContent>
  </ModalBackground>
);
export default Full;
