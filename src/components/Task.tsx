import React from 'react';
import { TaskProps } from '../types/Task';
import '../css/Task.css';


const Task: React.FC<TaskProps> = ({ Titre, onDelete }) => {
  return (
    <>
      <div className="task-container">
        <div className="titre">
          {Titre}
        </div>
        <div className="etat">
          <input type="checkbox" className="checkbox" />
        </div>
        <div className="suppress" onClick={onDelete}>
            Supprimer
        </div>
      </div>
    </>
  );
};

export default Task;
