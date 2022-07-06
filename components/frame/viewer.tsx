import React, { useMemo, useState } from "react";
import { useAnimation } from "framer-motion";
import { useMount } from "react-use";
import { Box } from "@chakra-ui/react";
import { ChakraMotion } from "components/chakra-motion";

interface ViewerProps {
  Component: React.FC;
}

const commonStyle = {
  backgroundColor: "#2b2b2b",
  width: "100%",
  height: "100%",
  borderStyle: "solid",
  borderColor: "grey",
  borderRadius: "3xl",
  borderWidth: "medium",
};

export const Viewer = ({ Component }: ViewerProps) => {
  const [hasAnimated, setHadAnimated] = useState(false);
  const controls = useAnimation();
  useMount(async () => {
    await controls.start({ opacity: 1 });
    setHadAnimated(true);
  });
  const content = useMemo(() => {
    if (hasAnimated)
      return (
        <Box {...commonStyle} overflow="hidden">
          <Component />
        </Box>
      );
    return (
      <ChakraMotion
        initial={{ opacity: 0 }}
        animate={controls}
        {...commonStyle}
      />
    );
  }, [hasAnimated, controls, Component]);
  return content;
};
