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

  const mobileButtonStyle = {
    ...buttonStyle,
    fontSize: "sm",
    px: 3,
    py: 2,
  };

  const dividerStyle = {
    borderColor: "#4dbe7a",
    borderWidth: "2px",
    width: "50%",
    alignSelf: "center",
  };

  const firstBoxStyle = {
    flex: isMobile ? "none" : "1",
    height: isMobile ? "100vh" : "auto",
    backgroundImage: `url('src/assets/beach.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 12,
    position: "relative",
    zIndex: 0,
    _before: {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      bg: "rgba(44, 45, 51, 0.8)",
      zIndex: -1,
    },
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        minHeight="100vh"
      >
        <Box sx={firstBoxStyle}>
          <VStack spacing={4} color="white">
            <Heading fontWeight={300}>WILL KIISKILA</Heading>
            <Divider sx={dividerStyle} />
            <Text fontSize="xl">
              Hi! My name is Will and I&apos;m a computer science graduate
              currently working as a security software developer for Immigrate
              Software. I&apos;m passionate about building software to make life
              easier, and I have an interest in cyber security!
            </Text>
            <HStack spacing={4} pt={2}>
              <Link href="mailto:kiiskila.will@gmail.com" isExternal>
                <Button
                  leftIcon={<FaEnvelope />}
                  sx={isMobile ? mobileButtonStyle : buttonStyle}
                >
                  Email
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/wkiiskila" isExternal>
                <Button
                  leftIcon={<FaLinkedin />}
                  sx={isMobile ? mobileButtonStyle : buttonStyle}
                >
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/kiiskila" isExternal>
                <Button
                  leftIcon={<FaGithub />}
                  sx={isMobile ? mobileButtonStyle : buttonStyle}
                >
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
          p={12}
        >
          <VStack spacing={4}>
            <Heading color="#2c2d33" fontWeight={300}>
              About me
            </Heading>
            <Divider sx={dividerStyle} />
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
