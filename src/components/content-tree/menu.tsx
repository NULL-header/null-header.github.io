import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ItemProps } from "./item";

type Item = React.FC<Omit<ItemProps, "onClick">>;

interface MenuProps {
  itemRecord: Record<string, Item>;
  level: number;
}

export const Menu = ({ itemRecord, level }: MenuProps) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "-100%" }}
      key={level}
    >
      {Object.entries(itemRecord).map(([title, C]) => (
        <C key={title} title={title} />
      ))}
    </motion.div>
  </AnimatePresence>
);
