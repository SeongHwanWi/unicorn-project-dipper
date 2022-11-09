import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";

import logo from "@assets/image/logo.png";

export default function LargeWithNewsletter() {
  return (
    <Box bg={"gray.50"}>
      <Container as={Stack} maxW={"100%"} py={10}>
        <Flex ml={"14px"}>
          <Stack spacing={3} w={"100%"}>
            <Box>
              <Flex align={"center"}>
                <Image src={logo} w={"7"} h={"7"} />
                <Text ml={"6px"}>Dipper</Text>
              </Flex>
            </Box>
            <Text fontSize={"sm"}>
              © 2022 TEAM UNICORN. All rights reserved
            </Text>
            <SimpleGrid
              templateColumns={{ sm: "1fr 1fr", md: "0.3fr 0.8fr 0.8fr 0.8fr" }}
              maxW={"2xl"}
              spacing={1.5}
            >
              <Text fontSize={"14px"}>팀 유니콘</Text>
              <Text fontSize={"14px"}>주소:@@@시 ##구 $$동 123</Text>
              <Text fontSize={"14px"}>이메일:support@likelon.org</Text>
              <Text fontSize={"14px"}>대표:유니콘</Text>
            </SimpleGrid>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
