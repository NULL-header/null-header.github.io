import React, { useMemo } from "react";
import type { AppProps } from "next/app";
import { Loading } from "components/loading";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

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

export default function App({ Component, pageProps }: AppProps) {
  // console.log({ Component });
  // const page = <Component {...pageProps} />;
  // console.log({ page });
  // return (
  //   <ChakraProvider theme={theme}>
  //     <Box height="100vh" width="100vw">
  //       <Loading />
  //     </Box>
  //   </ChakraProvider>
  // );
  // return (
  //   <ChakraProvider theme={theme}>
  //     <Box height="100vh" width="100vw">
  //       <AnimatePresence exitBeforeEnter>
  //         <Component {...pageProps} />
  //       </AnimatePresence>
  //     </Box>
  //   </ChakraProvider>
  // );
  return (
    <ChakraProvider theme={theme}>
      <Box height="100vh" width="100vw">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
