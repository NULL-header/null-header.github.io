import React, { useMemo } from "react";
import type { AppProps } from "next/app";
import { useVender } from "components/chakra-ui";

export default function App(props: AppProps) {
  const chakra = useVender();
  const page = useMemo(() => {
    if (chakra == null) return;
    const { extendTheme, ChakraProvider } = chakra;
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
    return ({ Component, pageProps }: AppProps) => (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }, [chakra]);
  if (page == null) return <div>Loading</div>;
  return page(props);
}
