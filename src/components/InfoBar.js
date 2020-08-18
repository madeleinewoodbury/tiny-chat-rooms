import React from 'react';

const InfoBar = ({ room }) => {
  return (
    <div className="info-bar">
      <div className="left-inner-container">
        <h3>{room}</h3>
      </div>
      <div className="right-inner-container">
        <a href="/">
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
