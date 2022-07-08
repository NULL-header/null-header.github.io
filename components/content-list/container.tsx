import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Divider,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

interface ContainerProps {
  title: string;
}

export const Container = React.memo(({ title }: ContainerProps) => (
  <Accordion allowToggle>
    <AccordionItem borderStyle="unset">
      <AccordionButton
        height="7vh"
        borderColor="white"
        borderStyle="solid"
        borderWidth="medium"
        borderRadius="full"
        textColor="white"
        display="flex"
        flexDirection="row"
        color="white"
        _focus={{
          outline: "none",
          backgroundColor: "white",
          textColor: "black",
          color: "black",
          borderColor: "black",
        }}
        _hover={{
          backgroundColor: "white",
          textColor: "black",
          color: "black",
          borderColor: "black",
        }}
      >
        <Icon as={FaUser} />
        <Divider
          orientation="vertical"
          margin="2%"
          height="100%"
          borderLeftWidth="2px"
        />
        <Box flexGrow={1}>
          <Text textAlign="left">{title}</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <Box>ok</Box>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
));
