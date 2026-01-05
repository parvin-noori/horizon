import { Button, type ButtonProps } from "@heroui/react";

interface MyButtonProps extends ButtonProps {
  isOnlyIcon?: boolean;
}

const MyButton: React.FC<MyButtonProps> = ({ isOnlyIcon, className, ...props }) => {
  const classes = isOnlyIcon
    ? `${className ?? ""} size-9 aspect-square p-0 min-w-auto shrink-0`
    : className;

  return <Button {...props} className={classes} />;
};

export default MyButton;
