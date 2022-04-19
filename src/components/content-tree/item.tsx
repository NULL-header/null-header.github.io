import React from "react";
import { Circle } from "@chakra-ui/react";

export interface ItemProps {
  title: string;
  isCurrent: boolean;
  onOver: () => void;
  onOut: () => void;
  onClick?: () => void;
}

export const Item = ({
  title,
  isCurrent,
  onOver,
  onOut,
  onClick,
}: ItemProps) => (
  <Circle
    bg={isCurrent ? "white" : "tomato"}
    minHeight="10%"
    onMouseEnter={onOver}
    onMouseLeave={onOut}
    onClick={onClick}
  >
    {title}
  </Circle>
);
