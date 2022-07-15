import React from "react";
import { IconType } from "react-icons";
import { Icon, Divider, Box } from "@chakra-ui/react";

export interface BaseInterfaceProps {
  icon: IconType;
  children: JSX.Element;
}

export const BaseInterface = React.memo(
  ({ icon, children }: BaseInterfaceProps) => (
    <>
      <Icon as={icon} />
      <Divider
        orientation="vertical"
        margin="2%"
        height="100%"
        borderLeftWidth="2px"
      />
      <Box flexGrow={1}>{children}</Box>
    </>
  ),
);

export const INTERFACE_PARENT_STYLE = {
  height: "7vh",
  borderColor: "white",
  borderStyle: "solid",
  borderWidth: "medium",
  borderRadius: "full",
  textColor: "white",
  display: "flex",
  flexDirection: "row",
  color: "white",
  alignItems: "center",
  padding: "2",
  paddingLeft: "4",
  _focus: {
    outline: "none",
    backgroundColor: "white",
    textColor: "black",
    color: "black",
    borderColor: "black",
  },
  _hover: {
    backgroundColor: "white",
    textColor: "black",
    color: "black",
    borderColor: "black",
  },
} as const;
