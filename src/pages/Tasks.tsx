import React from 'react';
import TaskForm from '../components/TaskForm';
import ITask from "../interfaces/ITask";

const Tasks: React.FC = () => {

    let tasks= fetchTasks();
    console.log(tasks)
  return (
    <div>
      <TaskForm />
    </div>
  );
}

export default Tasks;
