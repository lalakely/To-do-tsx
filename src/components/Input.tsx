import React, { useRef } from 'react';
import '../css/Input.css';

interface InputProps {
  handleAddTask: (taskTitle: string) => void;
}

const Input: React.FC<InputProps> = ({ handleAddTask }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      handleAddTask(inputRef.current.value);
      inputRef.current.value = ''; // Clear the input field after adding the task
    }
  };

  return (
    <>
     
        <form onSubmit={handleSubmit} className="input-container">
          <input type="text" ref={inputRef} />
          <div className="button-container">
            <button type="submit">Ajouter</button>
          </div>
        </form>
     
    </>
  );
};

export default Input;
