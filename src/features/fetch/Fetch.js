import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncGet, selectUsers } from './fetchSlice';

const Fetch = () => {
  const dispath = useDispatch();
  const users = useSelector(selectUsers);
  useEffect(() => {
    dispath(fetchAsyncGet());
  }, [dispath]);
  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.email}</div>;
      })}
    </div>
  );
};

export default Fetch;
