import React, { useMemo } from "react";
import { Box } from "@chakra-ui/react";

type Item = React.FC<{ title: string }>;

interface MenuProps {
  itemRecord: Record<string, Item>;
}

export const Menu = ({ itemRecord }: MenuProps) => (
  <Box>
    {Object.entries(itemRecord).map(([title, C]) => (
      <C key={title} title={title} />
    ))}
  </Box>
);
