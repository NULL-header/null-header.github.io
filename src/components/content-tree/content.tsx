import React, { useMemo } from "react";
import { Circle } from "@chakra-ui/react";

interface ContentProps {
  title: string;
}

export const Content = (props: ContentProps) => {
  const { title } = props;
  return <Circle bg="tomato">{title}</Circle>;
};
