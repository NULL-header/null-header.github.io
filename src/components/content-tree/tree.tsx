import React, { useState, useCallback, useEffect } from "react";
import { keyframes, Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ItemProps, Item } from "./item";
import { Menu } from "./menu";

type Contents = {
  [x: string]: { description: string } & (
    | { isContent: true }
    | { isContent: false; under: Contents }
  );
};

interface TreeProps {
  contents: Contents;
}
export const Tree = ({ contents }: TreeProps) => {
  const [levels, setLevels] = useState([contents]);
  const makeRecord = useCallback(
    (level: Contents) =>
      Object.entries(level).reduce((a, [key, val]) => {
        if (val.isContent) {
          const content = (props: ItemProps) => <Item {...props} />;
          // eslint-disable-next-line no-param-reassign
          a[key] = content;
        } else {
          const folder = (props: ItemProps) => (
            <Item
              {...props}
              onClick={() => {
                setLevels((lastLevels) => [...lastLevels, val.under]);
              }}
            />
          );
          // eslint-disable-next-line no-param-reassign
          a[key] = folder;
        }
        return a;
      }, {} as Record<string, React.FC<ItemProps>>),
    [],
  );

  return (
    <Box
      outline="solid"
      width="80%"
      height="80%"
      overflow="hidden"
      display="grid"
      gridTemplateColumns="1fr"
      sx={{
        "*": {
          gridRowStart: 1,
          gridColumnStart: 1,
        },
      }}
    >
      <Menu
        itemRecord={makeRecord(levels[levels.length - 1])}
        level={levels.length}
      />
    </Box>
  );
};
