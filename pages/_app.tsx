import React, { useCallback, useMemo, useState } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { Frame } from "components/frame";
import { ShutterUpper } from "components/shutter-upper";

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
  const [hasAnimated, setHasAnimated] = useState(false);
  const onAnimEnd = useCallback(() => {
    setHasAnimated(true);
  }, []);
  const Wrapped = useCallback(
    () => <Component {...pageProps} />,
    [Component, pageProps],
  );
  const element = useMemo(() => {
    if (!hasAnimated)
      return <ShutterUpper onAnimEnd={onAnimEnd} backgroundColor="#2b2b2b" />;
    return (
      <Box backgroundColor="#2b2b2b" width="100%" height="100%">
        <Frame Component={Wrapped} />
      </Box>
    );
  }, [hasAnimated, onAnimEnd, Wrapped]);
  return (
    <ChakraProvider theme={theme}>
      <Box height="100vh" width="100vw">
        {element}
      </Box>
    </ChakraProvider>
  );
}
