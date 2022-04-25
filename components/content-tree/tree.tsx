import React, { useState, useCallback } from "react";
import { Box, Button } from "@chakra-ui/react";
import { ItemProps, Item } from "./item";
import { Menu } from "./menu";
import { Viewer } from "./viewer";
import { SlideBox } from "../slide-box";

type Contents = {
  [x: string]: { description: string } & (
    | { isContent: true; path: string }
    | { isContent: false; under: Contents }
  );
};

interface TreeProps {
  contents: Contents;
}
export const Tree = ({ contents }: TreeProps) => {
  const [levels, setLevels] = useState<(Contents | string)[]>([contents]);
  const makeRecord = useCallback(
    (level: Contents) =>
      Object.entries(level).reduce((a, [key, val]) => {
        if (val.isContent) {
          const content = (props: ItemProps) => (
            <Item
              {...props}
              onClick={() =>
                setLevels((lastLevels) => [...lastLevels, val.path])
              }
            />
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
    [],
  );

  const back = useCallback(() => {
    setLevels((lastLevels) => lastLevels.slice(0, -1));
  }, []);

  const current = levels[levels.length - 1];
  const isView = typeof current === "string";
  return (
    <SlideBox
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      key={isView ? "view" : "tree"}
    >
      {isView ? (
        <Viewer />
      ) : (
        <Box width="80%" height="80%" outline="solid" overflow="hidden">
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
            height="100%"
          >
            <SlideBox key={levels.length}>
              <Menu itemRecord={makeRecord(current)} />
            </SlideBox>
          </Box>
        </Box>
      )}
      {levels.length > 1 ? <Button onClick={back}>back</Button> : ""}
    </SlideBox>
  );
};
