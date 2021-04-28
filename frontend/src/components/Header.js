import { Heading, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack m={20} alignItems={"center"}>
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, blue.500, blue.300, pink.500)"
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
