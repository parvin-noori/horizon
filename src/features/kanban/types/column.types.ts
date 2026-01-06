import { KanbanItemType } from "./kanban.types";

export type ColumnType = {
  id: string;
  title: string;
  color: string;
};

export interface ColumnProps {
  col: ColumnType;
  items: KanbanItemType[];
  features: KanbanItemType[];
}
