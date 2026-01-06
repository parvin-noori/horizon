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
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import MyButton from "../../components/ui/MyButtons";
import { KanbanItemType } from "./Kanban";
import { editKanban, removeKanban } from "./kanbanSlice";
import Avatar1 from "/imgs/Avatar1.png";
import Avatar2 from "/imgs/Avatar2.png";
import Avatar3 from "/imgs/Avatar3.png";

type KanbanItemProps = {
  feature: KanbanItemType;
  features: KanbanItemType[];
  isEditng: boolean;
  setEditngId: React.Dispatch<React.SetStateAction<number | null>>;
};

type FormData = {
  title: string;
  desc: string;
  status: string;
};
export default function KanbanItem(props: KanbanItemProps) {
  const { feature, features, isEditng, setEditngId } = props;
  const { title, desc, status } = feature;
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: title,
      desc: desc,
      status: status,
    },
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: feature.id, data: { type: "item", feature } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // transition: "opacity 0.2s",
    // opacity: hidden ? 0 : 1,
  };
  const background = getButtonBackground(feature.status);

  const avatarMap: Record<string, string> = {
    Avatar1: Avatar1,
    Avatar2: Avatar2,
    Avatar3: Avatar3,
  };

  const handleDelete = (id: number) => {
    dispatch(removeKanban({ id }));
  };

  function getButtonBackground(status: string) {
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
    { key: "pending", label: t("buttons.pending") },
    { key: "updates", label: t("buttons.updates") },
    { key: "errors", label: t("buttons.errors") },
    { key: "done", label: t("buttons.done") },
  ];

  useEffect(() => {
    if (isEditng) {
      inputRef.current?.focus();
    }
  }, [isEditng]);

  const handleSaveEdit = (data: FormData) => {
    const isDuplicate = features.some(
      (item) => item.title === data.title && item.id !== feature.id
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
        ...data,
        id: feature.id,
      })
    );
  };

  const { ref: registerRef, ...restRegister } = register("title", {
    required: "title is required",
  });
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="shadow-lg select-none min-h-[200px] duration-300 bg-secondary/50 dark:bg-white/5 p-5 rounded-xl flex gap-5 flex-col"
      ></div>
    );
  }
  return (
    <div
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      className={`shadow-lg select-none transtion-border duration-300 bg-white border border-transparent dark:bg-white/5 p-5 rounded-xl flex gap-5 flex-col ${
        isEditng
          ? ""
          : "cursor-grab hover:border-slate-300 dark:hover:border-slate-700"
      }`}
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
              ref={(el) => {
                registerRef(el);
                inputRef.current = el;
              }}
              {...restRegister}
              variant="bordered"
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
          <div className="flex items-center justify-between gap-x-5 ">
            <div className="flex items-center lg:gap-x-3 gap-x-3 w-full">
              <span className="capitalize lg:line-clamp-1 line-clamp-2 text-lg ">
                {feature.title}
              </span>
              {mouseIsOver && (
                <>
                  <MyButton
                    onPress={() => handleDelete(feature.id)}
                    isOnlyIcon
                    variant="light"
                    className="p-0 !shrink-0 ms-auto min-w-auto !size-8 rounded-lg text-slate-400"
                  >
                    <IoMdTrash />
                  </MyButton>
                  <MyButton
                    onPress={() => setEditngId(feature.id)}
                    isOnlyIcon
                    variant="light"
                    className="p-0 !shrink-0 min-w-auto !size-8 rounded-lg text-slate-400"
                  >
                    <AiOutlineEdit />
                  </MyButton>
                </>
              )}
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
              {feature.status ? t(`buttons.${status}`) : t(`buttons.done`)}
            </Chip>
          </div>
        </>
      )}
    </div>
  );
}
