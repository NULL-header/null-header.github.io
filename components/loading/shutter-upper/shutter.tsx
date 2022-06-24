import React from "react";
import { Box } from "@chakra-ui/react";
import type { Color } from "./type";

interface ShutterProps {
  color: Color;
}

export const Shutter = React.memo(({ color }: ShutterProps) => (
  <>
    <Box
      backgroundColor={color}
      height="100%"
      width="100%"
      clipPath="polygon(100% 0,100% 100%,0 100%)"
    />
    <Box backgroundColor={color} height="100%" width="100%" />
  </>
));
