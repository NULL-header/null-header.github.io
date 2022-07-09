import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BaseInterface, INTERFACE_PARENT_STYLE } from "./base-interface";

interface ContainerProps {
  title: string;
  children: JSX.Element | JSX.Element[];
  icon: IconType;
}
export const Container = React.memo(
  ({ title, children, icon }: ContainerProps) => (
    <Accordion allowToggle>
      <AccordionItem borderStyle="unset">
        <AccordionButton {...INTERFACE_PARENT_STYLE}>
          <BaseInterface icon={icon}>
            <Text textAlign="left">{title}</Text>
          </BaseInterface>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
);
