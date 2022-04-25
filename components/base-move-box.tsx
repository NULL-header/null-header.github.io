import React from "react";
import { forwardRef, Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

export const BaseMoveBox = forwardRef((props, ref) => (
  <Box
    height="100%"
    width="100%"
    display="grid"
    gridTemplateColumns="1fr"
    sx={{
      "*": {
        gridRowStart: 1,
        gridColumnStart: 1,
      },
    }}
  >
    <AnimatePresence>
      <Box as={motion.div} ref={ref} {...props} />
    </AnimatePresence>
  </Box>
));
