import React from 'react';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-container justify-end">
      <p className="sent-text pr">{trimmedName}</p>
      <div className="message-box bg-primary">
        <p className="message-text">{text}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="message-box bg-secondary">
        <p className="message-text">{text}</p>
      </div>
      <p className="sent-text pl">{user}</p>
    </div>
  );
};

export default Message;
