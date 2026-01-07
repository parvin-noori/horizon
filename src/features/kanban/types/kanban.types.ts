export interface KanbanItemType  {
  id: number;
  title: string;
  desc: string;
  status: string;
  members?: string[];
  column?: string;
  cover?: string;
};

export interface KanbanItemProps {
  feature: KanbanItemType;
  features: KanbanItemType[];
  isEditng: boolean;
  setEditngId: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface TaskFormData {
  title: string;
  desc: string;
  status: string;
}

export interface KanbanResponse {
  kanban?: KanbanItemType[];
}
