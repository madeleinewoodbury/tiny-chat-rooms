import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './InfoBar';
import Messages from './Messages';
import Input from './Input';

let socket;

const Chat = ({ history, location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const ENDPOINT =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_ENDPOINT
      : 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    socket.emit('join', { name, room }, ({ error }) => {
      if (error !== null) {
        setErrorMsg(error);
      }
    });

    setName(name);
    setRoom(room);

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', (roomData) => {
      const userData = roomData.users.map((user) => user.name);
      setUsers(userData);
    });
  }, []);

  // Send message
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return errorMsg === '' ? (
    <div className="chat-container">
      <InfoBar room={room} users={users} />
      <Messages messages={messages} name={name} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  ) : (
    <div className="error-container">
      <div>
        <h1>Sorry...</h1>
        <p>{errorMsg}</p>
      </div>

      <Link to="/" className="btn go-back">
        Go Back
      </Link>
    </div>
  );
};

export default Chat;
