import { Box, Flex } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { ModalItem } from "./ModalDemo";
export const AccordionDemo: React.FC<{ items: ModalItem[] }> = ({ items }) => {
  const accordionItems = useMemo(() => {
    return items.map((i) => (
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {i.firstName} {i.lastName}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Flex>
            <Box borderRadius={"sm"} bgColor={i.color} w="1" mr="2"></Box>{" "}
            {i.color}
          </Flex>
          {i.bio}
        </AccordionPanel>
      </AccordionItem>
    ));
  }, [items]);
  return <Accordion>{accordionItems}</Accordion>;
};
