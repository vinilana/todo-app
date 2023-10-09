import React from "react";
import { useBoardStore } from "../store/board.store";
import Column from "./Column";
import TaskForm from "./TaskForm";

const Board: React.FC = () => {
  const tasks = useBoardStore((state) => state.tasks);
  const updateTaskStatus = useBoardStore((state) => state.updateTaskStatus);
  const addTask = useBoardStore((state) => state.addTask);

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Column
          title="To do"
          status="todo"
          tasks={todoTasks}
          onStatusChange={updateTaskStatus}
        />
        <Column
          title="In progress"
          status="in-progress"
          tasks={inProgressTasks}
          onStatusChange={updateTaskStatus}
        />
        <Column
          title="Done"
          status="done"
          tasks={doneTasks}
          onStatusChange={updateTaskStatus}
        />
      </div>
      <TaskForm onSubmit={addTask} />
    </>
  );
};

export default Board;
