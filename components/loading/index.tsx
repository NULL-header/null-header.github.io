import React from "react";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChakraMotion } from "../chakra-motion";

export const Loading = () => (
  <Box overflow="hidden" height="100%" width="100%">
    <AnimatePresence>
      <ChakraMotion
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "-50%" }}
        transition={{ ease: "linear", duration: 2 } as any}
        height="200%"
        width="100%"
        display="flex"
        flexDirection="column"
      >
        <Box
          backgroundColor="#2b2b2b"
          height="100%"
          width="100%"
          clipPath="polygon(100% 0,100% 100%,0 100%)"
        />
        <Box backgroundColor="#2b2b2b" height="100%" width="100%" />
      </ChakraMotion>
    </AnimatePresence>
  </Box>
);
