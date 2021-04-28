import { Heading, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack m={24} alignItems={"center"}>
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo App
      </Heading>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="sm"
        onClick={toggleColorMode}
      />
    </HStack>
  );
};

export default Header;
