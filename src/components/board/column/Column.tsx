import React from "react";
import { useDrop } from "react-dnd";
import { useBoardStore } from "../../../store/board.store";
import { Task } from "../../../types";
import Card from "../card/Card";
import { StyledColumn } from "./Column.styles";

interface Props {
  title: string;
  status: Task["status"];
  onStatusChange: (taskId: Task["id"], status: Task["status"]) => void;
}

const Column: React.FC<Props> = ({ status, title, onStatusChange }) => {
  const tasks = useBoardStore((state) => state.tasks).filter(
    (task) => task.status === status
  );

  const [, ref] = useDrop({
    accept: "CARD",
    drop: (item: { id: Task["id"] }) => {
      onStatusChange(item.id, status);
    },
  });

  return (
    <StyledColumn ref={ref}>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </StyledColumn>
  );
};

export default Column;
