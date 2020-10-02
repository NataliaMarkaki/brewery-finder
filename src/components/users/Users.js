import React, { useState } from 'react';
import UserItem from './UserItem';

const Users = () => {
  const [ users, setUsers ] = useState([]);
  return <div style={userStyle}>{users.map((user, idx) => <UserItem key={idx} user={user} />)}</div>;
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
