import React, { useState, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import { ItemProps } from "./item";

type Item = React.FC<Omit<ItemProps, "onClick">>;

interface MenuProps {
  itemRecord: Record<string, Item>;
}

export const Menu = ({ itemRecord }: MenuProps) => {
  const [current, setCurrent] = useState("");
  return (
    <Box height="100%">
      {Object.entries(itemRecord).map(([title, C]) => (
        <C key={title} title={title} isCurrent={current == title} />
      ))}
    </Box>
  );
};
