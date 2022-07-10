import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { BaseInterface, INTERFACE_PARENT_STYLE } from "./base-interface";
import { LinkProps } from "./types";

export const ContainerExternalLink = React.memo(
  ({ title, link, icon }: LinkProps) => (
    <Box {...INTERFACE_PARENT_STYLE}>
      <BaseInterface icon={icon}>
        <Link flexGrow={1} _focus={{ outline: "none" }} href={link} isExternal>
          <Text>{title}</Text>
        </Link>
      </BaseInterface>
    </Box>
  ),
);
