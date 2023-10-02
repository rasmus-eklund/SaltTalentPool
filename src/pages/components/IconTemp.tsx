import { FC } from "react";
import Icon from "@mdi/react";

type IconProps = {
  path: string;
  content: string;
};

const IconTemp: FC<IconProps> = ({ path, content }: IconProps) => {
  return (
    <div className="flex">
      <Icon
        path={path}
        title="email"
        size={1}
        rotate={180}
        horizontal
        vertical
        color="black"
      />
      <span>{content}</span>
    </div>
  );
};

export default IconTemp;
