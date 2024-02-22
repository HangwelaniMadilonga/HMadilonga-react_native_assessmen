import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((currentTasks) => [...currentTasks, newTask]);
    console.log('Tasks updated:', tasks);
  };

  return (
    <TaskContext.Provider value={[ tasks, addTask ]}>
      {children}
    </TaskContext.Provider>
  );
};