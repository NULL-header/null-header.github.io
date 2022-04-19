import React from "react";
import { Circle } from "@chakra-ui/react";

export interface ItemProps {
  title: string;
  isCurrent: boolean;
  onClick?: () => void;
}

export const Item = ({ title, isCurrent, onClick }: ItemProps) => (
  <Circle
    bg="tomato"
    minHeight="10%"
    onClick={onClick}
    _hover={{ background: "white" }}
  >
    {title}
  </Circle>
);
