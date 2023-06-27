import React, {useState,useEffect} from 'react'
import  ReactDOM  from 'react-dom';
import { createPortal } from 'react-dom';
import { Children } from 'react';

function Mymodal({closeModal, children, handleSubmit}) {

   useEffect(() => {
    document.body.style.overflowY="hidden";
    return () => {
    document.body.style.overflowY="scroll"
    };
  },[]);


  return ReactDOM.createPortal(
    <>

          <div className="modal_wrapper"  onClick={closeModal}></div>
          <div id='modalParent'>
            <div className="modal_container_bb">
              
              {children}
              
            </div>
          </div>
    </>,
    document.querySelector('.myPortalModalDiv')
  )
}

export default Mymodal