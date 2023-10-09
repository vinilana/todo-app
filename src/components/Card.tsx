import React from "react";
import { Task } from "../types";

interface Props {
  task: Task;
  onStatusChange: (taskId: Task["id"], status: Task["status"]) => void;
}

const Card: React.FC<Props> = ({ task, onStatusChange }) => (
  <div>
    <h4>{task.title}</h4>
    <select
      value={task.status}
      onChange={(e) =>
        onStatusChange(task.id, e.target.value as Task["status"])
      }
    >
      <option value="todo">To Do</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
    </select>
  </div>
);

export default Card;
