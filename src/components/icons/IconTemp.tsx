import type { FC } from "react";
import Icon from "@mdi/react";

type IconProps = {
  path: string;
  content: string;
};

const IconTemp: FC<IconProps> = ({ path, content }: IconProps) => {
  return (
    <div className="flex gap-1">
      <Icon
        className="shrink-0"
        path={path}
        title="email"
        size={1}
        rotate={180}
        horizontal
        vertical
        color="black"
      />
      <p className="">{content}</p>
    </div>
  );
};

export default IconTemp;
