import {
  ChakraProvider,
  Box,
  Text,
  useBreakpointValue,
  Heading,
  Divider,
  VStack,
  Button,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const buttonStyle = {
    background: "linear-gradient(to top, #4dbe7a 50%, lightgray 50%)",
    backgroundSize: "100% 200%",
    transition: "background-position 1s, color 1s",
    color: "black",
    _hover: {
      backgroundPosition: "0 100%",
      color: "white",
    },
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        minHeight="100vh"
      >
        <Box
          flex={isMobile ? "none" : "1"}
          height={isMobile ? "100vh" : "auto"}
          bg="#2c2d33"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={4}>
            <Heading fontWeight={300}>WILL KIISKILA</Heading>
            <Divider />
            <Text fontSize="xl">
              Hi! My name is Will and I&apos;m a computer science graduate
              currently working as a security software developer for Immigrate
              Software. I&apos;m passionate about building software to make life
              easier, and I have an interest in cyber security!
            </Text>
            <HStack spacing={4}>
              <Link href="mailto:kiiskila.will@gmail.com" isExternal>
                <Button leftIcon={<FaEnvelope />} sx={buttonStyle}>
                  Email
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/wkiiskila" isExternal>
                <Button leftIcon={<FaLinkedin />} sx={buttonStyle}>
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/kiiskila" isExternal>
                <Button leftIcon={<FaGithub />} sx={buttonStyle}>
                  GitHub
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Box>
        <Box
          flex={isMobile ? "none" : "1"}
          height={isMobile ? "100vh" : "auto"}
          bg="whitesmoke"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={4}>
            <Heading color="#2c2d33" fontWeight={300}>
              About me
            </Heading>
            <Divider />
            <Text fontSize="xl" color="#999">
              I’m a computer science graduate from Thompson Rivers University in
              beautiful British Columbia. I am currently working remotely for
              Immigrate Software as a software developer. My main role is
              developing secure web apps with React, PHP, Laravel and
              PostgreSQL. I also have previous experience working with React,
              JavaScript, NodeJS and Android Studio (Java). In my spare time, I
              like to play piano, learn foreign languages, work on bug bounties,
              and go to the gym.
            </Text>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
