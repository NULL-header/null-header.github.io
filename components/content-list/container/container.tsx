import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Text,
  Box,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { BaseInterface, BaseInterfaceProps } from "../interface";

interface ContainerProps extends BaseInterfaceProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}
// copy & paste occurred
// for css styling
export const Container = React.memo(
  ({ title, children, icon }: ContainerProps) => (
    <Accordion allowToggle>
      <AccordionItem borderStyle="unset">
        <AccordionButton
          height="7vh"
          width="100%"
          display="flex"
          flexDirection="row"
          borderColor="white"
          borderStyle="solid"
          borderWidth="medium"
          borderRadius="full"
          textColor="white"
          color="white"
          alignItems="center"
          padding="2"
          paddingX="4"
          _hover={{
            backgroundColor: "white",
            textColor: "black",
            color: "black",
          }}
          _focus={{
            backgroundColor: "white",
            textColor: "black",
            color: "black",
          }}
        >
          <Icon as={icon} />
          <Divider
            orientation="vertical"
            margin="2%"
            height="100%"
            borderLeftWidth="2px"
          />
          <Text textAlign="left" flexGrow={1}>
            {title}
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
);
