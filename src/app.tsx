import React from "react";
import { extendTheme, Box, ChakraProvider } from "@chakra-ui/react";
import { Menu } from "./components/content-tree/menu";
import { Content } from "./components/content-tree/content";

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
      <Menu itemRecord={{ title1: Content, title2: Content }} />
    </Box>
  </ChakraProvider>
);
