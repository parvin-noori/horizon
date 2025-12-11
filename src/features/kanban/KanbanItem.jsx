import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Avatar,
  AvatarGroup,
  Button,
  Chip,
  Image,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import { editKanban, removeKanban } from "./kanbanSlice";
import Avatar1 from "/imgs/Avatar1.png";
import Avatar2 from "/imgs/Avatar2.png";
import Avatar3 from "/imgs/Avatar3.png";

export default function KanbanItem(props) {
  const { feature, isEditng, setEditngId } = props;
  const [title, setTitle] = useState(feature.title);
  const { id } = feature;
  const dispatch = useDispatch();
  const [status, setStatus] = useState(feature.status);
  const [desc, setDesc] = useState(feature.desc);
  const inputRef = useRef(null);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const background = getButtonBackground(feature.status);

  const avatarMap = {
    Avatar1,
    Avatar2,
    Avatar3,
  };

  const handleDelete = (id) => {
    dispatch(removeKanban({ id: id }));
  };

  function getButtonBackground(status) {
    switch (status) {
      case "pending":
        return "warning";
      case "updates":
        return "primary";
      case "errors":
        return "danger";
      default:
        return "success";
    }
  }

  const statusKanban = [
    { key: "pending", label: "pending" },
    { key: "updates", label: "updates" },
    { key: "errors", label: "errors" },
    { key: "done", label: "done" },
  ];

  useEffect(() => {
    if (isEditng) {
      inputRef.current?.focus();
    }
  }, [isEditng]);

  const handleSaveEdit = (id) => {
    console.log(id);
    setEditngId(null);
    dispatch(editKanban({ id: id, title: title, desc: desc, status: status }));
  };
  return (
    <div
      className="shadow-lg border-0 bg-white dark:bg-white/5 p-5 rounded-xl flex gap-5 flex-col"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      aria-label={`Drag handle for ${title}`}
    >
      <div className="flex items-center justify-between gap-x-5">
        {isEditng ? (
          <Input
            ref={inputRef}
            variant="bordered"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        ) : (
          <div className="flex items-center lg:gap-x-3 gap-x-3 w-full">
            <span className="capitalize lg:line-clamp-1 line-clamp-2 text-lg ">
              {feature.title}
            </span>
            <Button
              onPress={() => handleDelete(id)}
              isOnlyIcon
              variant="light"
              className="p-0 !shrink-0 ms-auto min-w-auto !size-8 rounded-lg text-slate-400"
            >
              <IoMdTrash />
            </Button>
            <Button
              onPress={() => setEditngId(id)}
              isOnlyIcon
              variant="light"
              className="p-0 !shrink-0 min-w-auto !size-8 rounded-lg text-slate-400"
            >
              <AiOutlineEdit />
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-col text-slate-400 space-y-3">
        {feature.cover && <Image src={feature.cover} alt={feature.title} />}
        {isEditng ? (
          <Textarea
            variant="bordered"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            // isClearable
          />
        ) : (
          <p className="text-sm line-clamp-5">{feature.desc}</p>
        )}
      </div>

      {isEditng ? (
        <>
          <Select
            variant="bordered"
            defaultSelectedKeys={[status]}
            placeholder="select a status"
            label="Status"
            items={statusKanban}
            onChange={(e) => setStatus(e.target.value)}
          >
            {(status) => <SelectItem>{status.label}</SelectItem>}
          </Select>
          <Button color="primary" onPress={() => handleSaveEdit(id)}>
            save
          </Button>
        </>
      ) : (
        <div className="flex items-center gap-x-2 justify-between">
          <AvatarGroup>
            {feature?.members?.map((member, index) => (
              <Avatar src={avatarMap[member]} key={index} />
            ))}
          </AvatarGroup>
          <Chip radius="sm" color={background} className="uppercase text-white">
            {feature.status ? feature.status : "done"}
          </Chip>
        </div>
      )}
    </div>
  );
}
