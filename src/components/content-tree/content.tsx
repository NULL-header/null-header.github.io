import React from "react";
import { Circle } from "@chakra-ui/react";

export interface ContentProps {
  title: string;
  isCurrent: boolean;
  onOver: () => void;
  onOut: () => void;
}

export const Content = ({ title, isCurrent, onOver, onOut }: ContentProps) => (
  <Circle
    bg={isCurrent ? "white" : "tomato"}
    minHeight="10%"
    onMouseEnter={onOver}
    onMouseLeave={onOut}
  >
    {title}
  </Circle>
);
