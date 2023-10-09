import React from "react";
import { useDrop } from "react-dnd";
import { useBoardStore } from "../store/board.store";
import { Task } from "../types";
import Card from "./Card";

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
      console.log(item);
      onStatusChange(item.id, status);
    },
  });

  return (
    <div
      style={{
        width: "300px",
        minHeight: "200px",
      }}
      ref={ref}
    >
      <h2>{title}</h2>
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
