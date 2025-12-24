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
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import { editKanban, removeKanban } from "./kanbanSlice";
import Avatar1 from "/imgs/Avatar1.png";
import Avatar2 from "/imgs/Avatar2.png";
import Avatar3 from "/imgs/Avatar3.png";

export default function KanbanItem(props) {
  const { feature, features, isEditng, setEditngId } = props;
  const { title, desc, status } = feature;
  const { id } = feature;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
      desc: desc,
      status: status,
    },
  });
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

  const handleSaveEdit = (data) => {
    const isDuplicate = features.some(
      (item) => item.title === data.title && item.id !== id
    );

    if (isDuplicate) {
      setError("title", {
        type: "manual",
        message: "عنوان تکراری است، لطفا عنوان دیگری وارد کنید.",
      });
      return;
    }

    setEditngId(null);
    dispatch(
      editKanban({
        id,
        ...data,
      })
    );
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
      {isEditng ? (
        <form
        aria-label="kanban edit form"
          onSubmit={handleSubmit(handleSaveEdit)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-y-2">
            <Input
              ref={inputRef}
              variant="bordered"
              {...register("title", { required: "title is required" })}
              type="text"
              isInvalid={errors.title ? true : false}
            />
            {errors.title && (
              <span className="text-danger-600 indent-2 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="flex flex-col text-slate-400 space-y-3">
            {feature.cover && <Image src={feature.cover} alt={feature.title} />}
            <div className="flex flex-col gap-y-2">
              <Textarea
                {...register("desc")}
                variant="bordered"
                isInvalid={errors.desc ? true : false}
                isClearable
              />
              {errors.desc && (
                <span className="text-danger-600 indent-2 text-sm">
                  {errors.desc.message}
                </span>
              )}
            </div>
          </div>

          <Select
            variant="bordered"
            defaultSelectedKeys={[status]}
            placeholder="select a status"
            {...register("status")}
            label="Status"
            items={statusKanban}
          >
            {(status) => <SelectItem>{status.label}</SelectItem>}
          </Select>

          <Button color="primary" type="submit">
            save
          </Button>
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between gap-x-5">
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
          </div>

          <div className="flex flex-col text-slate-400 space-y-3">
            {feature.cover && <Image src={feature.cover} alt={feature.title} />}
            <p className="text-sm line-clamp-5">{feature.desc}</p>
          </div>

          <div className="flex items-center gap-x-2 justify-between">
            <AvatarGroup>
              {feature?.members?.map((member, index) => (
                <Avatar src={avatarMap[member]} key={index} />
              ))}
            </AvatarGroup>
            <Chip
              radius="sm"
              color={background}
              className="uppercase text-white"
            >
              {feature.status ? feature.status : "done"}
            </Chip>
          </div>
        </>
      )}
    </div>
  );
}
