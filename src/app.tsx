import React from "react";
import { extendTheme, Box, ChakraProvider } from "@chakra-ui/react";
import { Tree } from "./components/content-tree/tree";

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

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box height="100vh" width="100vw">
      <Tree
        contents={{
          title1: { isContent: true, description: "" },
          title2: {
            isContent: false,
            description: "",
            under: {
              nested1: { isContent: true, description: "" },
              nested2: { isContent: true, description: "" },
            },
          },
          title3: { isContent: true, description: "" },
          title4: { isContent: true, description: "" },
        }}
      />
    </Box>
  </ChakraProvider>
);
