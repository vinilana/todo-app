import { create } from "zustand";
import { Task } from "../types";

interface Store {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTaskStatus: (taskId: Task["id"], status: Task["status"]) => void;
}

export const useBoardStore = create<Store>((set, get) => ({
  tasks: [
    {
      id: "1",
      title: "Task 1",
      status: "todo",
    },
    {
      id: "2",
      title: "Task 2",
      status: "in-progress",
    },
    {
      id: "3",
      title: "Task 3",
      status: "done",
    },
  ],
  addTask: (task) =>
    set({
      tasks: [...get().tasks, task],
    }),
  updateTaskStatus: (taskId, status) =>
    set({
      tasks: get().tasks.map((task): Task => {
        if (task.id === taskId) {
          return {
            ...task,
            status,
          };
        }
        return task;
      }),
    }),
}));
