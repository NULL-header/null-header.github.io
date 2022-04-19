import React, { useState } from "react";
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
  const level = levels[levels.length - 1];
  const record = Object.entries(level).reduce((a, [key, val]) => {
    if (val.isContent) {
      const content = (props: ItemProps) => <Item {...props} />;
      // eslint-disable-next-line no-param-reassign
      a[key] = content;
    } else {
      const folder = (props: ItemProps) => (
        <Item
          {...props}
          onClick={() => {
            setLevels((nextLevels) => [...levels, val.under]);
          }}
        />
      );
      // eslint-disable-next-line no-param-reassign
      a[key] = folder;
    }
    return a;
  }, {} as Record<string, React.FC<ItemProps>>);
  return <Menu itemRecord={record} />;
};
