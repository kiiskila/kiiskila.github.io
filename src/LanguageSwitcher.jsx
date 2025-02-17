import React, { useContext } from "react";
import { Button, HStack, Image } from "@chakra-ui/react";
import { LanguageContext } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "no" : "en"));
  };

  return (
    <HStack position="fixed" top={4} right={4} zIndex={1000}>
      <Button
        onClick={toggleLanguage}
        p={1}
        bg="transparent"
        _hover={{ bg: "transparent" }}
      >
        <Image
          src={language === "en" ? "/flag-canada.png" : "/flag-norway.png"}
          alt={language === "en" ? "Canada Flag" : "Norway Flag"}
          boxSize="30px"
        />
      </Button>
    </HStack>
  );
};

export default LanguageSwitcher;
