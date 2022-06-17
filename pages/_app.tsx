import React from "react";
import type { AppProps } from "next/app";
import { Loading } from "components/loading";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";

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

export default function App(props: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box height="100vh" width="100vw">
        <Loading />
      </Box>
    </ChakraProvider>
  );
}
