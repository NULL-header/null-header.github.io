import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BaseInterface, INTERFACE_PARENT_STYLE } from "./base-interface";

interface ContainerItemProps {
  title: string;
  link: string;
  icon: IconType;
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
