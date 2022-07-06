import React, { useCallback, useMemo } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { makeLoading } from "components/loading";

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

const importer = () => import("components/frame").then((mod) => mod.Frame);

const Frame = makeLoading(importer);

export default function App({ Component, pageProps }: AppProps) {
  const Wrapped = useCallback(
    () => <Component {...pageProps} />,
    [Component, pageProps],
  );
  const frameProps = useMemo(() => ({ Component: Wrapped }), [Wrapped]);
  return (
    <ChakraProvider theme={theme}>
      <Box height="100vh" width="100vw">
        <Frame backgroundColor="#2b2b2b" props={frameProps} />
      </Box>
    </ChakraProvider>
  );
}
