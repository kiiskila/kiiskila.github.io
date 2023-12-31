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
    //alignSelf: "center",
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
          <VStack spacing={4} color="white" align="start">
            <Heading fontWeight={300}>WILL KIISKILA</Heading>
            <Divider sx={dividerStyle} />
            <Text fontSize="xl">
              Hi! My name is Will and I&apos;m a software developer with a
              strong background in computer science. Currently, I am working as
              a full-stack software developer for{" "}
              <Link
                href="https://immigrate.biz/"
                textDecoration={"underline"}
                isExternal
              >
                Immigrate Software
              </Link>
              . I am also currently pursuing a part-time Master of Science in
              Computer Science from the{" "}
              <Link
                href="https://cdso.utexas.edu/mscs"
                isExternal
                textDecoration={"underline"}
              >
                University of Texas at Austin
              </Link>
              , online. I&apos;m passionate about developing innovative software
              solutions and have a keen interest in software security and
              software architecture.
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
          <VStack spacing={4} align="center">
            <Heading color="#2c2d33" fontWeight={300}>
              About me
            </Heading>
            <Divider sx={dividerStyle} />
            <Text fontSize="xl" color="#999">
              Originally from British Columbia, I now work remotely out of
              Saskatoon as a full-stack developer. My primary focus is on
              building robust web applications using React, TypeScript, PHP
              (Laravel), and PostgreSQL. I'm also an active contributor to open
              source, maintaining projects like{" "}
              <Link
                href="https://www.npmjs.com/package/lorem-ipsum-norwegian"
                textDecoration={"underline"}
                isExternal
              >
                lorem-ipsum-norwegian
              </Link>{" "}
              and{" "}
              <Link
                href="https://github.com/kiiskila/norsk-bokleser"
                textDecoration={"underline"}
                isExternal
              >
                norsk-bokleser
              </Link>
              . In my free time, I enjoy playing the piano, learning new
              languages, and exploring cyber security.
            </Text>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
