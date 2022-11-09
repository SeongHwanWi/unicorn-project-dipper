import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Image,
} from "@chakra-ui/react";

import styled from "@emotion/styled";
import RouteImg from "@assets/image/itinerary.png";
import BgRouteImg from "@assets/image/bg_route.png";
import "@assets/fonts/Eulyoo1945-Regular.woff2";

const NeonText = styled.div`
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
`;

const NeonTextForYou = styled.div`
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ffee00,
    0 0 82px #ffee00, 0 0 92px #ffee00, 0 0 102px #ffee00, 0 0 151px #ffee00;
`;

const SubText = styled.div`
  color: aliceblue;
  font-family: "Eulyoo1945-Regular";
  max-width: "3xl";
`;

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
          <NeonText>함께&nbsp;</NeonText>
          <Text as={"span"} color={"whiteAlpha.700"}>
            걸어 봐요.
          </Text>
          <br />
          <NeonText as={"span"}>빛</NeonText>
          <Text as={"span"} color={"whiteAlpha.700"}>
            나는&nbsp;
          </Text>
          <NeonTextForYou as={"span"}>당신</NeonTextForYou>
          <Text as={"span"} color={"whiteAlpha.700"}>
            만의&nbsp;
          </Text>
          <NeonText as={"span"}>길.&nbsp;</NeonText>
        </Heading>

        <SubText>
          당신만의 특별한 추억이 담긴 장소가 있나요?
          <br />
          좋은 추억이 담긴 루트를 제작하고 다른 사람에게 소개해보세요.
        </SubText>

        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"facebook"}
            bg={"black"}
            _hover={{ bg: "blackAlpha.100" }}
          >
            추억 공유하러 가기
          </Button>
          <Button rounded={"full"} px={6}>
            사용법이 궁금해요
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
