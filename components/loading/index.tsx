import React, { useMemo, useState, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import { useAsync } from "react-use";
import { ShutterUpper } from "./shutter-upper";
import { Color } from "./type";

interface LoadingProps {
  backgroundColor: Color;
}

export const makeLoading =
  <T extends unknown = Record<string, never>>(
    specified: () => Promise<React.FC<T>>,
  ) =>
  ({ backgroundColor, props }: LoadingProps & { props: T }) => {
    const state = useAsync(specified);
    const [hasAnimated, setHasAnimated] = useState(false);
    const onAnimEnd = useCallback(() => {
      setHasAnimated(true);
    }, []);
    const isEndLoad = useMemo(
      () => !state.loading && hasAnimated,
      [state.loading, hasAnimated],
    );
    const propsNonNullable = useMemo(
      () => (props == null ? {} : props),
      [props],
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
          display="flex"
          backgroundColor={backgroundColor}
        >
          <Component {...(propsNonNullable as any)} />
        </Box>
      );
    }, [isEndLoad, backgroundColor, onAnimEnd, state.value, propsNonNullable]);
    return element;
  };
