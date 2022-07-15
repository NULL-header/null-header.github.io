import React from "react";
import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";
import { BaseInterface } from "../../interface";
import { LinkProps } from "./type";

export const LocalLink = React.memo(({ title, link, icon }: LinkProps) => (
  <BaseInterface icon={icon}>
    <NextLink href={link}>
      <Link flexGrow={1} _focus={{ outline: "none" }}>
        <Text>{title}</Text>
      </Link>
    </NextLink>
  </BaseInterface>
));
