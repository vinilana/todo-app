import React from "react";
import { useBoardStore } from "../store/board.store";
import Column from "./Column";

const Board: React.FC = () => {
  const tasks = useBoardStore((state) => state.tasks);
  const updateTaskStatus = useBoardStore((state) => state.updateTaskStatus);
  const addTask = useBoardStore((state) => state.addTask);

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div>
      <Column
        title="todo"
        tasks={todoTasks}
        onStatusChange={updateTaskStatus}
      />
      <Column
        title="in-progress"
        tasks={inProgressTasks}
        onStatusChange={updateTaskStatus}
      />
      <Column
        title="done"
        tasks={doneTasks}
        onStatusChange={updateTaskStatus}
      />
    </div>
  );
};

export default Board;
