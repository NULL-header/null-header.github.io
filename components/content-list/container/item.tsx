import React from "react";
import { Box, Text, Link, Icon, Divider } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface ContainerItemProps {
  title: string;
  link: string;
  icon: IconType;
}

export const ContainerItem = React.memo(
  ({ title, link, icon }: ContainerItemProps) => (
    <Box
      height="7vh"
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
      paddingLeft="4"
    >
      <Icon as={icon} />
      <Divider
        orientation="vertical"
        margin="2%"
        height="100%"
        borderLeftWidth="2px"
      />
      <Link flexGrow={1}>
        <a href={link}>
          <Text>{title}</Text>
        </a>
      </Link>
    </Box>
  ),
);
