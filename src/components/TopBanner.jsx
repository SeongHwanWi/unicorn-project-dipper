import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Image,
  Highlight,
} from "@chakra-ui/react";

import RouteImg from "@assets/image/itinerary.png";
import BgRouteImg from "@assets/image/bg_route.png";

export default function TopBanner() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        justify={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        pos={"relative"}
      >
        <Image
          src={BgRouteImg}
          w={"full"}
          h={"full"}
          pos={"absolute"}
          zIndex={-3}
          filter={"blur(5px)"}
        />
        <Box
          bgColor={"black"}
          w={"full"}
          h={"full"}
          pos={"absolute"}
          zIndex={-1}
          opacity={"0.6"}
        />
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          <Highlight
            query="함께&nbsp;"
            styles={{ px: "3xl", py: "3xl", rounded: "1px", bg: "yellow" }}
          >
            함께&nbsp;
          </Highlight>
          <Text as={"span"} color={"whiteAlpha.700"}>
            걸어 봐요.
          </Text>
          <br />
          <Text as={"span"} color={"yellow"}>
            빛
          </Text>
          <Text as={"span"} color={"whiteAlpha.700"}>
            나는&nbsp;
          </Text>
          <Text as={"span"} color={"yellow"}>
            당신
          </Text>
          <Text as={"span"} color={"whiteAlpha.700"}>
            만의&nbsp;
          </Text>
          <Text as={"span"} color={"yellow"}>
            길.&nbsp;
          </Text>
        </Heading>

        <Text color={"white"} maxW={"3xl"} noOfLines={"2"}>
          당신만의 특별한 추억이 담긴 장소가 있나요?
          <br />
          좋은 추억이 담긴 루트를 제작하고 다른 사람에게 소개해보세요.
        </Text>

        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"facebook"}
            bg={"black"}
            _hover={{ bg: "blackAlpha.100" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"} justify={"center"} pos={"relative"}>
          <Image height={"80px"} src={RouteImg} />
          <Box
            w={"5rem"}
            h={"5rem"}
            bgGradient={"linear(to-r, yellow.300, pink.200)"}
            pos={"absolute"}
            zIndex={-1}
            filter={"blur(50px)"}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
