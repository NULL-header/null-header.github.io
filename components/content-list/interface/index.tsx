import React from "react";
import type { IconType } from "react-icons";
import { Icon, Divider, Box } from "@chakra-ui/react";
import { Frame } from "./frame";

export interface BaseInterfaceProps {
  icon: IconType;
  children: JSX.Element | JSX.Element[];
}

export const BaseInterface = React.memo(
  ({ children, icon }: BaseInterfaceProps) => (
    <Frame>
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
    </Frame>
  ),
);
