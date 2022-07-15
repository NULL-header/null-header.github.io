import React from "react";
import { Box } from "@chakra-ui/react";

export const Frame = React.memo(
  ({ children }: React.PropsWithChildren<unknown>) => (
    <Box
      height="7vh"
      width="100%"
      display="flex"
      flexDirection="row"
      borderColor="white"
      borderStyle="solid"
      borderWidth="medium"
      borderRadius="full"
      textColor="white"
      color="white"
      alignItems="center"
      padding="2"
      paddingX="4"
      marginY="1vh"
      _hover={{
        backgroundColor: "white",
        textColor: "black",
        color: "black",
      }}
    >
      {children}
    </Box>
  ),
);
