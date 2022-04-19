import React, { useState, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import { ContentProps } from "./content";

type Item = React.FC<ContentProps>;

interface MenuProps {
  itemRecord: Record<string, Item>;
}

export const Menu = ({ itemRecord }: MenuProps) => {
  const [current, setCurrent] = useState("");
  return (
    <Box height="100%">
      {Object.entries(itemRecord).map(([title, C]) => (
        <C
          key={title}
          title={title}
          isCurrent={current == title}
          onOut={() => setCurrent("")}
          onOver={() => setCurrent(title)}
        />
      ))}
    </Box>
  );
};
