import React from "react";
import { extendTheme, Box, ChakraProvider } from "@chakra-ui/react";
import { Tree } from "./components/content-tree";
import { SlideBox } from "./components/slide-box";

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
      />
    </Box>
  </ChakraProvider>
);
