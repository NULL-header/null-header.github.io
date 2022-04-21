import React from "react";
import { forwardRef } from "@chakra-ui/react";
import { BaseMoveBox } from "./base-move-box";

export const SlideBox = forwardRef((props, ref) => (
  <BaseMoveBox
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: "0%" }}
    exit={{ opacity: 0, x: "-100%" }}
    {...props}
    ref={ref}
  />
));
