import { Box, Heading, Button } from "@chakra-ui/react";
export const ButtonDemo = () => {
  return (
    <>
      <Box p={4}>
        <Heading size={"sm"}>Size: sm</Heading>
        <Button size={"sm"}>Default (Outline Primary)</Button>
        <Button size={"sm"} variant="link">
          Link
        </Button>
        <Button size={"sm"} variant="primary">
          Primary
        </Button>
      </Box>
      <Box p={4}>
        <Heading size={"md"}>Size: md</Heading>
        <Button>Default (Outline Primary)</Button>
        <Button variant="link">Link</Button>
        <Button variant="primary">Primary</Button>
      </Box>
      <Box p={4}>
        <Heading size={"lg"}>Size: lg</Heading>
        <Button size={"lg"}>Default (Outline Primary)</Button>
        <Button size={"lg"} variant="link">
          Link
        </Button>
        <Button size={"lg"} variant="primary">
          Primary
        </Button>
      </Box>
    </>
  );
};
