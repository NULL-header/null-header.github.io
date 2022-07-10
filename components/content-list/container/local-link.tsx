import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { BaseInterface, INTERFACE_PARENT_STYLE } from "./base-interface";
import { LinkProps } from "./types";

export const ContainerLocalLink = React.memo(
  ({ title, link, icon }: LinkProps) => (
    <Box {...INTERFACE_PARENT_STYLE}>
      <BaseInterface icon={icon}>
        <NextLink href={link}>
          <Link flexGrow={1} _focus={{ outline: "none" }}>
            <Text>{title}</Text>
          </Link>
        </NextLink>
      </BaseInterface>
    </Box>
  ),
);
