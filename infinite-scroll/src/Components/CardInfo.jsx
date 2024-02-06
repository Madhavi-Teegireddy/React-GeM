import React, { useState } from 'react';
import Modal from './Modal';

const CardInfo = ({ myData }) => {
  const { title, body, id } = myData;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div style={{ border: '1px solid gray', backgroundColor: 'lightgray' }} onClick={handleOpenModal}>
        <p>{id}</p>
        <p>{body.substr(0, 150)}</p>
        <h5>{title.substr(0, 15)}</h5>
      </div>

      {isModalOpen && (
        <div className="modal">
        <button onClick={handleCloseModal} style={{color:"red", fontSize:"25px", fontWeight:"bold"}}>X</button>
          <p>{id}</p>
          <p>{body}</p>
        </div>
      )}
    </>
  );
};

export default CardInfo;
