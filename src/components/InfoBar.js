import React from 'react';

const InfoBar = ({ room, users }) => {
  return (
    <div className="info-bar">
      <div className="info-top">
        <div className="left-inner-container">
          <h3>{room}</h3>
        </div>
        <div className="right-inner-container">
          <a href="/">
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </div>
      </div>
      <div className="info-bottom">
        <strong>
          <i className="fas fa-users"></i> People chatting:{' '}
        </strong>{' '}
        {users &&
          users.map((user, idx) => (
            <span key={idx}>
              {users.indexOf(user) !== users.length - 1
                ? `${user}, `
                : `${user}`}
            </span>
          ))}
      </div>
    </div>
  );
};

export default InfoBar;
