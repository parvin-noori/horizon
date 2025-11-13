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
import { useDispatch } from "react-redux";
import { KanbanCard } from "../../components/ui/shadcn-io/kanban";
import { editKanban } from "./kanbanSlice";
import Avatar1 from "/imgs/Avatar1.png";
import Avatar2 from "/imgs/Avatar2.png";
import Avatar3 from "/imgs/Avatar3.png";
export default function KanbanItem(props) {
  const { feature, column } = props;
  const background = getButtonBackground(feature.status);
  const avatarMap = {
    Avatar1,
    Avatar2,
    Avatar3,
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

  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(feature.title);
  const [status, setStatus] = useState(feature.status);
  const [desc, setDesc] = useState(feature.desc);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const statusKanban = [
    { key: "pending", label: "pending" },
    { key: "updates", label: "updates" },
    { key: "errors", label: "errors" },
    { key: "done", label: "done" },
  ];

  useEffect(() => {
    if (editable) {
      inputRef.current?.focus();
    }
  }, [editable]);

  const handleSaveEdit = (id) => {
    setEditable(false);
    console.log(id);
    dispatch(editKanban({ id: id, title: title, desc: desc, status: status }));
  };
  return (
    <KanbanCard
      className="shadow-lg border-0 bg-white dark:bg-white/5"
      column={column.name}
      id={feature.id}
      key={feature.id}
      name={feature.title}
    >
      <div className="flex items-center justify-between gap-x-5">
        {editable ? (
          <Input
            ref={inputRef}
            variant="bordered"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        ) : (
          <>
            <span className="capitalize text-[#2B3674] dark:text-white  line-clamp-1 text-lg">
              {feature.title}
            </span>
            <Button
              onPress={() => setEditable(true)}
              isOnlyIcon
              variant="light"
              className="p-0 !shrink-0 min-w-auto !size-8 rounded-lg text-slate-400"
            >
              <AiOutlineEdit />
            </Button>
          </>
        )}
      </div>
      <div className="flex flex-col text-slate-400 space-y-3">
        {feature.cover && <Image src={feature.cover} alt={feature.title} />}
        {editable ? (
          <Textarea
            variant="bordered"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            // isClearable
          />
        ) : (
          <p>{feature.desc}</p>
        )}
      </div>

      {editable ? (
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
          <Button color="primary" onPress={() => handleSaveEdit(feature.id)}>
            save
          </Button>
        </>
      ) : (
        <div className="flex items-center gap-x-2 justify-between">
          <AvatarGroup>
            {feature?.members?.map((member) => (
              <Avatar src={avatarMap[member]} />
            ))}
          </AvatarGroup>
          <Chip radius="sm" color={background} className="uppercase text-white">
            {feature.status ? feature.status : "done"}
          </Chip>
        </div>
      )}
    </KanbanCard>
  );
}
