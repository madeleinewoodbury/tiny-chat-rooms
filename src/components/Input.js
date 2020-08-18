import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form">
      <input
        className="send-input"
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className="send-btn btn" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
