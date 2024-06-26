import React, { useState } from 'react';
import Input from './components/Input';
import Task from './components/Task';
import './App.css'

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (taskTitle: string) => {
    if (taskTitle.trim()) {
      setTasks([...tasks, taskTitle]);
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <Input handleAddTask={handleAddTask} />
      {tasks.map((title, index) => (
        <Task key={index} Titre={title} onDelete={() => handleDeleteTask(index)} />
      ))}
    </>
  );
};

export default App;
