import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { extendTheme, Box, ChakraProvider } from "@chakra-ui/react";
import { Tree } from "./components/content-tree";
import { Viewer } from "./components/viewer";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
      },
    },
  },
});

type Status =
  | {
      name: "tree";
    }
  | {
      name: "view";
      path: string;
    };

export const App = () => {
  const [status, setStatus] = useState<Status>({ name: "tree" });
  const setView = (path: string) => {
    setStatus({ name: "view", path });
  };
  return (
    <ChakraProvider theme={theme}>
      <Box
        height="100vh"
        width="100vw"
        overflow="hidden"
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
          <Box
            as={motion.div}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-100%" }}
            key={status.name}
            height="100%"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {status.name === "tree" ? (
              <Tree
                contents={{
                  title1: { isContent: true, description: "", path: "" },
                  title2: {
                    isContent: false,
                    description: "",
                    under: {
                      nested1: { isContent: true, description: "", path: "" },
                      nested2: { isContent: true, description: "", path: "" },
                    },
                  },
                  title3: { isContent: true, description: "", path: "" },
                  title4: { isContent: true, description: "", path: "" },
                }}
                onClickContents={setView}
              />
            ) : (
              <Viewer />
            )}
          </Box>
        </AnimatePresence>
      </Box>
    </ChakraProvider>
  );
};
