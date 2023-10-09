import React from "react";
import { useBoardStore } from "../store/board.store";
import Column from "./Column";
import TaskForm from "./TaskForm";

const Board: React.FC = () => {
  const updateTaskStatus = useBoardStore((state) => state.updateTaskStatus);
  const addTask = useBoardStore((state) => state.addTask);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Column title="To do" status="todo" onStatusChange={updateTaskStatus} />
        <Column
          title="In progress"
          status="in-progress"
          onStatusChange={updateTaskStatus}
        />
        <Column title="Done" status="done" onStatusChange={updateTaskStatus} />
      </div>
      <TaskForm onSubmit={addTask} />
    </>
  );
};

export default Board;
