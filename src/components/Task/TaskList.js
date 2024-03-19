import React from 'react';
import { useSelector } from 'react-redux';
import { selecttasks } from '../../features/task/taskSlice';
import TaskItem from './TaskItem';

export const TaskList = () => {
  const tasks = useSelector(selecttasks);
  return (
    <>
      {tasks.map((task) => {
        return <TaskItem id={task.id} task={task} />;
      })}
    </>
  );
};

export default TaskList;
