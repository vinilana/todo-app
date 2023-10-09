import React from "react";
import { useDrag } from "react-dnd";
import { Task } from "../types";

interface Props {
  task: Task;
}

const Card: React.FC<Props> = ({ task }) => {
  const [, ref] = useDrag({
    type: "CARD",
    item: { id: task.id, status: task.status },
  });

  return (
    <div ref={ref}>
      <h4>{task.title}</h4>
    </div>
  );
};

export default Card;
