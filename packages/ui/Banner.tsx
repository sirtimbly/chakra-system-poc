import * as React from "react";
import { Flex } from "@chakra-ui/react";

export const Banner: React.FC<{ topRight?: React.ReactNode }> = ({
  topRight,
  children,
  ...props
}) => {
  return (
    <Flex
      width={"full"}
      flexFlow="column nowrap"
      minH={{ sm: "32", md: "64" }}
      align="center"
      justify={"center"}
      py={3}
      mb={3}
      color="white"
      bg="red.500"
      fontSize={"3xl"}
      {...props}
    >
      <Flex justify={"end"} width="full">
        {topRight}
      </Flex>
      {children}
    </Flex>
  );
};
