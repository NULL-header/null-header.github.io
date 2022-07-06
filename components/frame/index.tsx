import React from "react";
import { Box } from "@chakra-ui/react";
import { Viewer } from "./viewer";

interface FrameProps {
  Component: React.FC;
}

export const Frame = ({ Component }: FrameProps) => (
  <Box
    display="grid"
    gridTemplateColumns="10% 1fr 10%"
    gridTemplateRows="10% 1fr 15%"
    width="100%"
    height="100%"
  >
    <Box gridRow="2" gridColumn="2">
      <Viewer Component={Component} />
    </Box>
  </Box>
);
