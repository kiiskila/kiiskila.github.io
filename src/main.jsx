import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { LanguageProvider } from "./LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ChakraProvider>
  </React.StrictMode>
);
