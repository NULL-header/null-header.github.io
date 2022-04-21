import React from "react";
import { ItemProps } from "./item";

type Item = React.FC<Omit<ItemProps, "onClick">>;

interface MenuProps {
  itemRecord: Record<string, Item>;
}

export const Menu = ({ itemRecord }: MenuProps) => (
  <>
    {Object.entries(itemRecord).map(([title, C]) => (
      <C key={title} title={title} />
    ))}
  </>
);
