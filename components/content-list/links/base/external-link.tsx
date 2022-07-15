import React from "react";
import { Link, Text, Icon } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BaseInterface } from "../../interface";
import { LinkProps } from "./type";

export const ExternalLink = React.memo(({ title, link, icon }: LinkProps) => (
  <BaseInterface icon={icon}>
    <Link flexGrow={1} _focus={{ outline: "none" }} href={link} isExternal>
      <Text>{title}</Text>
      <Icon as={FaExternalLinkAlt} />
    </Link>
  </BaseInterface>
));
