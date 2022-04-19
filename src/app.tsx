import React from "react";
import { extendTheme, Box, ChakraProvider } from "@chakra-ui/react";
import { HelloWorld } from "./components/HelloWorld";

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
      <HelloWorld />
    </Box>
  </ChakraProvider>
);
