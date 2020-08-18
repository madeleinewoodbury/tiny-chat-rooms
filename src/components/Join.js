import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="join inner-container">
      <h1 className="heading">Join</h1>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="10"
        />
      </div>
      <div>
        <select
          className="input mt-1"
          name="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option value="0">Select a room</option>
          <option value="Room 1">Room 1</option>
          <option value="Room 2">Room 2</option>
          <option value="Room 3">Room 3</option>
          <option value="Room 4">Room 4</option>
        </select>
      </div>
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button className="btn mt-1" type="submit">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default Join;
