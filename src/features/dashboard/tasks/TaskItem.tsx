import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Checkbox, cn } from "@heroui/react";
import { MdOutlineDragIndicator } from "react-icons/md";
import { Task } from "./Tasks";

type TaskItemProps = {
  item: Task;
};

export default function TaskItem(props: TaskItemProps) {
  const { item } = props;
  const { id, title } = item;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className=" p-2 flex items-center justify-between rounded-lg"
      ref={setNodeRef}
      style={style}
    >
      <Checkbox
        classNames={{
          base: cn(
            "inline-flex max-w-full w-full m-0 cursor-pointer rounded-lg items-center justify-start p-0"
          ),
          label: cn(
            "w-full text-slate-400 capitalize",
            "group-data-[selected=true]:text-inherit text-sm"
          ),
        }}
        value={title}
      >
        {title}
      </Checkbox>
      <button
        {...attributes}
        {...listeners}
        className="cursor-move ms-auto"
        aria-label={`Drag handle for ${title}`}
      >
        <MdOutlineDragIndicator />
      </button>
    </div>
  );
}
