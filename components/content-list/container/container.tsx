import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import { BaseInterface } from "../base-interface";
import type { InterfaceProps } from "./types";

interface ContainerProps extends InterfaceProps {
  children: JSX.Element | JSX.Element[];
}
export const Container = React.memo(
  ({ title, children, icon }: ContainerProps) => (
    <Accordion allowToggle>
      <AccordionItem borderStyle="unset">
        <AccordionButton width="100%">
          <BaseInterface icon={icon}>
            <Text textAlign="left" flexGrow={1}>
              {title}
            </Text>
            <AccordionIcon />
          </BaseInterface>
        </AccordionButton>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
);
