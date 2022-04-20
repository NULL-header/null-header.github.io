import React, { useState, useCallback } from "react";
import { Box, Button } from "@chakra-ui/react";
import { ItemProps, Item } from "./item";
import { Menu } from "./menu";

type Contents = {
  [x: string]: { description: string } & (
    | { isContent: true; path: string }
    | { isContent: false; under: Contents }
  );
};

interface TreeProps {
  contents: Contents;
  onClickContents: (path: string) => void;
}
export const Tree = ({ contents, onClickContents }: TreeProps) => {
  const [levels, setLevels] = useState<Contents[]>([contents]);
  const makeRecord = useCallback(
    (level: Contents) =>
      Object.entries(level).reduce((a, [key, val]) => {
        if (val.isContent) {
          const content = (props: ItemProps) => (
            <Item {...props} onClick={() => onClickContents(val.path)} />
          );
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
    [onClickContents],
  );

  const back = useCallback(() => {
    setLevels((lastLevels) => lastLevels.slice(0, -1));
  }, []);

  const current = levels[levels.length - 1];
  return (
    <Box width="80%" height="80%" outline="solid">
      <Box
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
        <Menu itemRecord={makeRecord(current)} level={levels.length} />
      </Box>
      {levels.length > 1 ? <Button onClick={back}>back</Button> : ""}
    </Box>
  );
};
