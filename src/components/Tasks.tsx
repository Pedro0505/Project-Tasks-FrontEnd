import axios from 'axios';
import React from 'react';

interface PorpTypes {
  content: string;
  id: string;
  setTasks: React.Dispatch<React.SetStateAction<{ content: string;id: string }[]>>
}

function Tasks({ content, id, setTasks }: PorpTypes) {
  async function deleteTask() {
    const url = `${process.env.REACT_APP_BACKEND_URL}/tasks/${id}`;

    await axios.delete(url);

    setTasks((prev) => {
      const filtered = prev.filter((e) => e.id !== id);

      return filtered;
    });
  }

  return (
    <div>
      <h1>{ content }</h1>
      <button type="button" onClick={deleteTask}>Excluir</button>
    </div>
  );
}

export default Tasks;
