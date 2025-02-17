import React, { useContext } from "react";
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
import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

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
  const { language } = useContext(LanguageContext);

  return (
    <ChakraProvider>
      <LanguageSwitcher />
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        minHeight="100vh"
      >
        <Box sx={firstBoxStyle}>
          <VStack spacing={4} color="white" align="start">
            <Heading fontWeight={300}>WILL KIISKILA</Heading>
            <Divider sx={dividerStyle} />
            <Text fontSize="xl">{translations[language].welcome}</Text>
            <HStack spacing={4} pt={2}>
              <ContactButton
                href="mailto:kiiskila.will@gmail.com"
                icon={<FaEnvelope />}
                buttonStyle={buttonStyle}
              >
                {translations[language].email}
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
              {translations[language].aboutMe}
            </Heading>
            <Divider sx={dividerStyle} />
            <Text fontSize="xl" color="#999">
              {translations[language].about}
            </Text>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
