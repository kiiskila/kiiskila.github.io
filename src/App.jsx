import {
  ChakraProvider,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

function App() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

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
          bg="darkgray"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xl">Lorem ipsum dolor sit amet...</Text>
        </Box>
        <Box
          flex={isMobile ? "none" : "1"}
          height={isMobile ? "100vh" : "auto"}
          bg="whitesmoke"
          color="darkgray"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xl">Consectetur adipiscing elit...</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
