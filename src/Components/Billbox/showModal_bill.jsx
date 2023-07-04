import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import { Children } from 'react';

function Mymodal({ closeModal, children, handleSubmit }) {

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll"
    };
  }, []);


  return ReactDOM.createPortal(
    <>

      <div className="modal_wrapper" onClick={closeModal}></div>
      <div id='modalParent'>
        <div className="modal_container" style={{ maxWidth: '630px', minWidth: '350px', height: '95%', paddingLeft:'0', paddingRight: '0' }}>
          <div style={{ position: 'absolute', zIndex:'10', top: '25px', right: '25px' }} className='cls_btn'>
            <i  onClick={closeModal} class="fa fa-window-close fa-2x" aria-hidden="true"></i>
          </div>
          {children}

        </div>
      </div>
    </>,
    document.querySelector('.myPortalModalDiv')
  )
}

export default Mymodal