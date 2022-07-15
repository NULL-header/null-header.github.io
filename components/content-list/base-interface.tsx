import React from "react";
import { IconType } from "react-icons";
import { Icon, Divider, Box } from "@chakra-ui/react";

export interface BaseInterfaceProps {
  icon: IconType;
  children: JSX.Element | JSX.Element[];
}

export const BaseInterface = React.memo(
  ({ icon, children }: BaseInterfaceProps) => (
    <Box
      height="7vh"
      width="100%"
      borderColor="white"
      borderStyle="solid"
      borderWidth="medium"
      borderRadius="full"
      textColor="white"
      display="flex"
      flexDirection="row"
      color="white"
      alignItems="center"
      padding="2"
      paddingX="4"
      _focus={{
        outline: "none",
        backgroundColor: "white",
        textColor: "black",
        color: "black",
        borderColor: "black",
      }}
      _hover={{
        backgroundColor: "white",
        textColor: "black",
        color: "black",
        borderColor: "black",
      }}
    >
      <Icon as={icon} />
      <Divider
        orientation="vertical"
        margin="2%"
        height="100%"
        borderLeftWidth="2px"
      />
      <Box
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="row"
      >
        {children}
      </Box>
    </Box>
  ),
);

export const INTERFACE_PARENT_BUTTON_STYLE_FOCUS = {
  _focus: {
    outline: "none",
    backgroundColor: "white",
    textColor: "black",
    color: "black",
    borderColor: "black",
  },
} as const;
