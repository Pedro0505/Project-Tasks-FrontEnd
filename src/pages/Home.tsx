import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tasks from '../components/Tasks';

function Home() {
  const [tasks, setTasks] = useState<{ content: string, id: string }[]>([]);

  useEffect(() => {
    async function getTasks() {
      const url = `${process.env.REACT_APP_BACKEND_URL}/tasks`;

      const { data } = await axios.get(url);

      setTasks(data.data);
    }

    getTasks();
  }, []);

  return (
    <div>
      {
        tasks.map((e) => (
          <Tasks content={e.content} key={e.id} id={e.id} setTasks={setTasks} />
        ))
      }
    </div>
  );
}

export default Home;
