import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, deletetask } from '../../features/task/taskSlice';

const TaskItem = (task) => {
  const dispath = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => {
          dispath(completeTask(task.task));
        }}
        defaultChecked={task.task.completed}
      />
      <span>{task.task.title}</span>
      <button onClick={() => dispath(deletetask(task.task))}>DELETE</button>
    </div>
  );
};

export default TaskItem;
