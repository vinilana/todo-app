import React from "react";
import { useBoardStore } from "../../store/board.store";
import Column from "./column/Column";
import TaskForm from "./task-form/TaskForm";
import { Board as StyledBoard } from "./Board.styles";

const Board: React.FC = () => {
  const updateTaskStatus = useBoardStore((state) => state.updateTaskStatus);
  const addTask = useBoardStore((state) => state.addTask);

  return (
    <>
      <StyledBoard>
        <Column title="To do" status="todo" onStatusChange={updateTaskStatus} />
        <Column
          title="In progress"
          status="in-progress"
          onStatusChange={updateTaskStatus}
        />
        <Column title="Done" status="done" onStatusChange={updateTaskStatus} />
      </StyledBoard>
      <TaskForm onSubmit={addTask} />
    </>
  );
};

export default Board;
