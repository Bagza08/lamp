import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Text,
  Image,
  InputGroup,
  Input,
  Button,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HeadBar() {
  return (
    <>
      <Box
        top={0}
        zIndex={999}
        display={"flex"}
        w={"100%"}
        alignItems="center"
        gap={3}
        justifyContent={"center"}
        color={"blackAlpha.100"}
        boxShadow={"md"}
        position={"fixed"}
        bg="white"
      >
        <Flex
          p={"5"}
          flexDirection={"row"}
          width={"85%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Link to="/">
              <Image
                ms={3}
                h={"50px"}
                src="https://drive.google.com/uc?export=view&id=1Ay2vGzgt3-ynha0iryWDv7BemD0gevkT"
              />
            </Link>
          </Box>
          <Box>
            <InputGroup size="md">
              <Input placeholder="Cari..." />
              <InputRightElement width="3rem">
                <IconButton
                  aria-label="Cari"
                  icon={<SearchIcon />}
                  size="sm"
                  // onClick={handleSearch}
                />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box>
            <Text fontWeight={"semibold"} color={"black"}>
              COURSES
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"semibold"} color={"black"}>
              DASBOARD
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"semibold"} color={"black"}>
              EXPLORE
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"semibold"} color={"black"}>
              PROGRAM
            </Text>
          </Box>
          <Box>
            <Button
              colorScheme="teal"
              size="sm"
              fontSize="md"
              fontWeight="bold"
              letterSpacing="wide"
            >
              Register
            </Button>
          </Box>
          <Box me={5}>
            <Button
              colorScheme="teal"
              size="sm"
              fontSize="md"
              fontWeight="bold"
              letterSpacing="wide"
            >
              Login
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
