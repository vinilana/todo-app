export interface Task {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
}

export interface Columns {
  [key: string]: {
    title: string;
    tasks: Task[];
  };
}
