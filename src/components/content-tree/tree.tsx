import React from "react";
import { ItemProps, Item } from "./item";
import { Menu } from "./menu";

type Contents = {
  [x: string]: { title: string } & (
    | { isContent: true }
    | { isContent: false; under: Contents }
  );
};

interface TreeProps {
  contents: Contents;
}

export const Tree = ({ contents }: TreeProps) => {
  const record = Object.entries(contents).reduce((a, [key, val]) => {
    if (val.isContent) {
      const content = (props: ItemProps) => <Item {...props} />;
      // eslint-disable-next-line no-param-reassign
      a[key] = content;
    } else {
      const folder = (props: ItemProps) => <Item {...props} />;
    }
    return a;
  }, {} as Record<string, React.FC<ItemProps>>);
  return <Menu itemRecord={record} />;
};
