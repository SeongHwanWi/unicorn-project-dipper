import {
  Box,
  Center,
  Circle,
  Text,
  Flex,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import EconomyTextCircle from "./atoms/EconomyTextCircle";

export default function TokenEconomy() {
  const radius = 150;
  const marginHori = 70;
  const marginVer = -7;
  return (
    <Flex
      justify={"center"}
      py={12}
      px={{ base: "20px", sm: "30px", lg: "50px" }}
      h={"150vh"}
      align={"center"}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        alignItems={"center"}
      >
        <VStack spacing={4}>
          <Text
            fontWeight={"400px"}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"120%"}
            textAlign={"center"}
            fontFamily={"Pretendard-Regular"}
            p={2}
          >
            나만 아는 루트를
            <br />
            공유하고 <br />
            사용하며 <br />
            보상받는 시스템
            <br />
          </Text>
        </VStack>

        <Flex w={"full"} align={"center"} justify={"center"} pos={"relative"}>
          <Circle
            maxH={"330px"}
            fontFamily={"Pretendard-Regular"}
            marginTop={50}
          >
            <Box>
              <Box marginY={marginVer}>
                <Center>
                  <EconomyTextCircle
                    title="시스템"
                    subTitle="스마트 컨트렉트로 관리되는 투명한 구조"
                    bgColor="green.500"
                    radius={radius}
                    marginHori={0}
                    marginVer={marginVer}
                    textColor="white"
                  />
                </Center>
              </Box>
              <Box>
                <Center>
                  <EconomyTextCircle
                    title="보상"
                    subTitle="토큰,
              NFT"
                    bgColor="green.200"
                    radius={radius}
                    marginHori={marginHori}
                    marginVer={0}
                    textColor="black"
                  />
                  <EconomyTextCircle
                    title="컨텐츠"
                    subTitle="여행, 맛집, 운동, 사진"
                    bgColor="green.200"
                    radius={radius}
                    marginHori={marginHori}
                    marginVer={0}
                    textColor="black"
                  />
                </Center>
              </Box>
              <Box marginTop={30}>
                <Center>
                  <EconomyTextCircle
                    title="가이드"
                    subTitle="자신만의 루트를 공유"
                    bgColor="green.500"
                    radius={radius}
                    marginHori={marginHori}
                    marginVer={0}
                    textColor="white"
                  />
                  <EconomyTextCircle
                    title="팔로워"
                    subTitle="루트를 인증하고 보상을 얻어보세요"
                    bgColor="green.500"
                    radius={radius}
                    marginHori={marginHori}
                    marginVer={0}
                    textColor="white"
                  />
                </Center>
              </Box>
              <Box marginY={marginVer}>
                <Center>
                  <EconomyTextCircle
                    title="경험"
                    subTitle='"dipper"ence 한 경험'
                    bgColor="green.200"
                    radius={radius}
                    marginHori={0}
                    marginVer={marginVer}
                    textColor="black"
                  />
                </Center>
              </Box>
            </Box>
            <Circle
              w="200px"
              h="200px"
              bgGradient={"linear(to-r, green.200, yellow.500)"}
              pos={"absolute"}
              zIndex={-3}
              filter={"blur(70px)"}
            />
          </Circle>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
