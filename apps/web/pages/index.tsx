import {
  useColorMode,
  Box,
  Heading,
  useDisclosure,
  Button,
  Switch,
  HStack,
} from "@chakra-ui/react";
import { Banner } from "ui";
import { useCallback, useState } from "react";
import { ButtonDemo } from "../components/ButtonDemo";
import { ModalItem, MyModal } from "../components/ModalDemo";
import { AccordionDemo } from "../components/AccordionDemo";
import { Flex } from "@chakra-ui/react";

export default function Web() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [itemList, setItemList] = useState<ModalItem[]>([]);
  console.log("🚀 ~ file: index.tsx ~ line 7 ~ Web ~ colorMode", colorMode);
  const toggleHandler = useCallback(() => {
    console.log("toggling from", colorMode);
    toggleColorMode();
  }, [colorMode, toggleColorMode]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const saveItem = useCallback(
    (values: ModalItem) => {
      setItemList((prev) => {
        return prev ? [...prev, values] : [values];
      });
      onClose();
    },
    [onClose]
  );
  return (
    <Box>
      <Flex width={"full"} direction="row-reverse" p={1} bg="red.600">
        <HStack spacing={3} mr="1">
          <Box color="white">
            Dark Theme {colorMode === "dark" ? "On" : "Off"}
          </Box>
          <Switch
            isChecked={colorMode === "dark"}
            colorScheme={"red"}
            onChange={toggleHandler}
          ></Switch>
        </HStack>
      </Flex>
      <Banner>
        <Heading fontSize={{ base: "2xl", md: "6xl" }}>Chakra UI POC</Heading>
      </Banner>
      <Box p={4}>
        <Button variant={"primary"} onClick={onOpen}>
          Add Item
        </Button>
      </Box>
      <Box maxW={{ base: "full", md: "container.md" }}>
        <AccordionDemo items={itemList} />
      </Box>
      <ButtonDemo />
      <MyModal isOpen={isOpen} onClose={onClose} onSubmit={saveItem} />
    </Box>
  );
}
