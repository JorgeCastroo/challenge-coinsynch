import React from "react";
import IcomoonReact from "react-icomoon";

import iconSet from "@/assets/icons.json";
import { colors } from "@/styles/tokens/colors";

export interface IconProps {
  onPress?: () => void;
  color?: string;
  size: string | number;
  name: string;
  className?: string;
  style?: React.CSSProperties | undefined;
  isCursorPointer?: boolean;
}
export const Icon: React.FC<IconProps> = ({
  name,
  size,
  color,
  className = "",
  isCursorPointer = false,
  onPress,
  style,
}: IconProps) => {
  return (
    <IcomoonReact
      style={{
        cursor: isCursorPointer ? "pointer" : "inherit",
        color: color || "inherit",
        ...style,
      }}
      onClick={onPress ? () => onPress() : () => {}}
      className={className}
      iconSet={iconSet}
      color={color ? color : colors["secondary-300"]}
      size={size}
      icon={name}
    />
  );
};
