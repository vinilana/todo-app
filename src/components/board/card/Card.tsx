import React from "react";
import { useDrag } from "react-dnd";
import { useBoardStore } from "../../../store/board.store";
import { Task } from "../../../types";
import { MoveBackButton, MoveForwardButton } from "../../buttons";
import { Card as StyledCard } from "./Card.styles";

interface Props {
  task: Task;
}

const Card: React.FC<Props> = ({ task }) => {
  const [, ref] = useDrag({
    type: "CARD",
    item: { id: task.id, status: task.status },
  });
  const updateTaskStatus = useBoardStore((state) => state.updateTaskStatus);

  const isFirstColumn = task.status === "todo";
  const isLastColumn = task.status === "done";

  const handleMoveBack = () => {
    const status = task.status === "in-progress" ? "todo" : "in-progress";
    updateTaskStatus(task.id, status as Task["status"]);
  };

  const handleMoveForward = () => {
    const status = task.status === "in-progress" ? "done" : "in-progress";
    updateTaskStatus(task.id, status as Task["status"]);
  };

  return (
    <StyledCard ref={ref}>
      <h4>{task.title}</h4>
      <MoveBackButton onClick={handleMoveBack} disabled={isFirstColumn}>
        Move back
      </MoveBackButton>
      <MoveForwardButton onClick={handleMoveForward} disabled={isLastColumn}>
        Move forward
      </MoveForwardButton>
    </StyledCard>
  );
};

export default Card;
