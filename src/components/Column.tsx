import React from "react";
import { Task } from "../types";
import Card from "./Card";

interface Props {
  title: string;
  tasks: Task[];
  onStatusChange: (taskId: Task["id"], status: Task["status"]) => void;
}

const Column: React.FC<Props> = ({ tasks, title, onStatusChange }) => (
  <div>
    <h2>{title}</h2>
    {tasks.map((task) => (
      <Card key={task.id} task={task} onStatusChange={onStatusChange} />
    ))}
  </div>
);

export default Column;
