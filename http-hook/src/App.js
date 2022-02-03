import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

import useHttp from "./hooks/use-http";

function App() {
  //* State
  const [tasks, setTasks] = useState([]);

  //* Method
  const transformTasks = (traskObject) => {
    const loadedTask = [];

    for (const taskKey in traskObject) {
      loadedTask.push({ id: taskKey, text: traskObject[taskKey].text });
    }

    setTasks(loadedTask);
  };

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  //* HTTP HOOK
  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp(
    {
      url: "https://react-test-98851-default-rtdb.firebaseio.com/tasks.json",
    },
    transformTasks
  );

  //* useEffect
  useEffect(() => {
    fetchTasks();
  }, []);

  //* return
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
