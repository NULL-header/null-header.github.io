import React from "react";
import { Box } from "@chakra-ui/react";
import { ChakraMotion } from "components/chakra-motion";
import { useAnimation } from "framer-motion";
import { useMount } from "react-use";
import type { Color } from "./type";
import { Shutter } from "./shutter";

interface ShutterUpperProps {
  backgroundColor: Color;
  onAnimEnd: () => void;
}

export const ShutterUpper = ({
  backgroundColor,
  onAnimEnd,
}: ShutterUpperProps) => {
  const controls = useAnimation();
  useMount(async () => {
    await controls.start({
      opacity: 1,
      y: "-50%",
      transition: { ease: "linear", duration: 2 },
    });
    onAnimEnd();
  });
  return (
    <Box overflow="hidden" height="100%" width="100%">
      <ChakraMotion
        initial={{ opacity: 0, y: "100%" }}
        animate={controls}
        transition={{ ease: "linear", duration: 2 } as any}
        height="200%"
        width="100%"
        display="flex"
        flexDirection="column"
      >
        <Shutter color={backgroundColor} />
      </ChakraMotion>
    </Box>
  );
};
