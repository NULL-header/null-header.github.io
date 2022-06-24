import React, { useMemo, useState, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import { useAsync } from "react-use";
import { ShutterUpper } from "./shutter-upper";
import { Color } from "./type";

interface LoadingProps {
  backgroundColor: Color;
}

export const makeLoading =
  (specified: () => Promise<React.FC>) =>
  ({ backgroundColor }: LoadingProps) => {
    const state = useAsync(specified);
    const [hasAnimated, setHasAnimated] = useState(false);
    const onAnimEnd = useCallback(() => {
      setHasAnimated(true);
    }, []);
    const isEndLoad = useMemo(
      () => !state.loading && hasAnimated,
      [state.loading, hasAnimated],
    );
    const element = useMemo(() => {
      if (!isEndLoad)
        return (
          <ShutterUpper
            backgroundColor={backgroundColor}
            onAnimEnd={onAnimEnd}
          />
        );
      const Component = state.value as React.FC;
      return (
        <Box
          height="100%"
          width="100%"
          overflow="hidden"
          backgroundColor={backgroundColor}
        >
          <Component />
        </Box>
      );
    }, [isEndLoad, backgroundColor, onAnimEnd, state.value]);
    return element;
  };
