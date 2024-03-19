import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newTask } from '../../features/task/taskSlice';

const TaskInput = () => {
  const dispath = useDispatch();
  const [editTitle, setEditTitle] = useState('');
  const handleTitleChange = (e) => {
    setEditTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(newTask(editTitle));
    setEditTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editTitle}
        onChange={handleTitleChange}
        placeholder="Plese type in your task"
      />
      <button type="button">NEW</button>
    </form>
  );
};

export default TaskInput;
