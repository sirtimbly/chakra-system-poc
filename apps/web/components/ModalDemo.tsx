import * as React from "react";
import { useCallback, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Stack,
  HStack,
  FormLabel,
  Radio,
  RadioGroup,
  Textarea,
} from "@chakra-ui/react";

export type ModalItem = {
  firstName?: string;
  lastName?: string;
  color?: string;
  bio?: string;
};

export const MyModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (item: ModalItem) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [formItem, setFormItem] = React.useReducer(
    (
      prev: ModalItem,
      [key, value]: [key: keyof ModalItem | "", value: string]
    ) => {
      if (key === "") {
        return {};
      }
      return { ...prev, [key]: value };
    },
    {}
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      console.log("submitting");
      e.preventDefault();
      onSubmit(formItem);
      setFormItem(["", ""]);
    },
    [onSubmit, formItem]
  );

  const handleClose = useCallback(() => {
    setFormItem(["", ""]);
    onClose();
  }, [onClose]);

  const handleInputChange = useCallback(
    (
      event: React.ChangeEvent<
        HTMLFormElement | HTMLInputElement | HTMLTextAreaElement
      >
    ) =>
      setFormItem([event.target.name as keyof ModalItem, event.target.value]),
    []
  );

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mb="5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              quis eleifend nibh. Maecenas sollicitudin risus ex, ut sagittis
              diam tristique tincidunt.
            </Box>

            <Stack spacing={3}>
              <FormLabel mr="0">
                First Name
                <Input
                  value={formItem.firstName}
                  name="firstName"
                  onChange={handleInputChange}
                  placeholder=""
                />
              </FormLabel>
              <FormLabel mr="0">
                Last Name
                <Input
                  name="lastName"
                  value={formItem.lastName}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </FormLabel>
              <FormLabel mr="0">
                Choose A Color{" "}
                <RadioGroup
                  onChange={(next) => setFormItem(["color", next])}
                  value={formItem.color}
                  name="color"
                >
                  <Flex align={"stretch"} justify="start">
                    <Box
                      borderRadius={"sm"}
                      bgColor={formItem.color}
                      w="1"
                      mr="2"
                    ></Box>
                    <Stack>
                      <Radio value="red">Red</Radio>
                      <Radio value="orange">Orange</Radio>
                      <Radio value="yellow">Yellow</Radio>
                      <Radio value="green">Green</Radio>
                      <Radio value="blue">Blue</Radio>
                      <Radio value="violet">Violet</Radio>
                    </Stack>
                  </Flex>
                </RadioGroup>
              </FormLabel>
              <FormLabel>
                Bio
                <Textarea name="bio" onChange={handleInputChange}>
                  {formItem.bio}
                </Textarea>
              </FormLabel>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <HStack spacing={"3"}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                disabled={!formItem.firstName && !formItem.lastName}
                as={"button"}
                type="submit"
                variant={"primary"}
                mr={3}
                onClick={handleSubmit}
              >
                Add Item
              </Button>
            </HStack>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
