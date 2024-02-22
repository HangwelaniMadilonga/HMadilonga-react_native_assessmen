import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  //Adds a task object to the array.
  const addTask = (newTask) => {
    setTasks((currentTasks) => [...currentTasks, newTask]);
   
  };

  //New setTask without the task identified by the taskID
  const removeTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter(task => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={[tasks, addTask, removeTask]}>
      {children}
    </TaskContext.Provider>
  );
};