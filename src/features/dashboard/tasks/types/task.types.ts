export interface Task  {
  id: number;
  title: string;
};

export interface TaskResponse {
  tasks?: Task[];
}

export interface TaskItemProps  {
  item: Task;
};