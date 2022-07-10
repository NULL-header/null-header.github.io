import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { BaseInterface, INTERFACE_PARENT_STYLE } from "./base-interface";
import { InterfaceProps } from "./types";

interface ContainerItemProps extends InterfaceProps {
  link: string;
}

export const ContainerItem = React.memo(
  ({ title, link, icon }: ContainerItemProps) => (
    <Box {...INTERFACE_PARENT_STYLE}>
      <BaseInterface icon={icon}>
        <Link flexGrow={1} href={link} _focus={{ outline: "none" }}>
          <Text>{title}</Text>
        </Link>
      </BaseInterface>
    </Box>
  ),
);
