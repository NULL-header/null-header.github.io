import React from "react";
import { Circle } from "@chakra-ui/react";

export interface ItemProps {
  title: string;
  onClick?: () => void;
}

export const Item = ({ title, onClick }: ItemProps) => (
  <Circle bg="tomato" onClick={onClick} _hover={{ background: "white" }}>
    {title}
  </Circle>
);
