import {
  ChakraProvider,
  Box,
  VStack,
  Divider,
  Text,
  Heading,
  Link,
  Button,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

const useResponsiveStyles = () => {
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

  return {
    isMobile,
    buttonStyle: isMobile ? mobileButtonStyle : buttonStyle,
    dividerStyle: {
      borderColor: "#4dbe7a",
      borderWidth: "2px",
      width: "50%",
    },
    firstBoxStyle: {
      flex: isMobile ? "none" : "1",
      height: isMobile ? "100vh" : "auto",
      backgroundImage: `url('/beach.jpg')`,
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
    },
  };
};

const ContactButton = ({ href, icon, buttonStyle, children }) => (
  <Link href={href} isExternal>
    <Button leftIcon={icon} sx={buttonStyle}>
      {children}
    </Button>
  </Link>
);

ContactButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  buttonStyle: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

function App() {
  const { isMobile, buttonStyle, dividerStyle, firstBoxStyle } =
    useResponsiveStyles();

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
              Hi! I’m Will, a software developer who loves understanding how
              things work and applying that to solve problems and build cool
              stuff. I’m currently a Senior Full Stack Developer with the{" "}
              <Link
                href="https://www2.gov.bc.ca/"
                textDecoration={"underline"}
                isExternal
              >
                Government of British Columbia
              </Link>
              , where I am working on a large scale legacy modernization
              project. Previously, I worked as a developer at{" "}
              <Link
                href="https://immigrate.biz/"
                textDecoration={"underline"}
                isExternal
              >
                Immigrate Software
              </Link>
              . I hold a Bachelor of Computing Science from{" "}
              <Link
                href="https://www.tru.ca/"
                isExternal
                textDecoration={"underline"}
              >
                Thompson Rivers University
              </Link>
              , located in Kamloops, BC. My interests are in software
              architecture, security, and working in collaborative team
              environments.
            </Text>
            <HStack spacing={4} pt={2}>
              <ContactButton
                href="mailto:kiiskila.will@gmail.com"
                icon={<FaEnvelope />}
                buttonStyle={buttonStyle}
              >
                Email
              </ContactButton>
              <ContactButton
                href="https://www.linkedin.com/in/wkiiskila"
                icon={<FaLinkedin />}
                buttonStyle={buttonStyle}
              >
                LinkedIn
              </ContactButton>
              <ContactButton
                href="https://github.com/kiiskila"
                icon={<FaGithub />}
                buttonStyle={buttonStyle}
              >
                GitHub
              </ContactButton>
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
              Originally from Smithers, BC, I’ve moved around a few times and am
              currently living and working remotely from Vancouver Island. My
              focus is on building secure web applications using React,
              TypeScript, Node.js, PHP (Laravel), and PostgreSQL. I’m also
              passionate about CI/CD and DevOps, streamlining workflows to
              deliver better software faster. I maintain projects like{" "}
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
              . When I’m not coding, you’ll find me playing piano, learning new
              programming and natural languages, or digging into cyber security
              papers.
            </Text>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
