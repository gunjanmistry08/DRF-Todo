import { StackDivider } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      borderColor="gray.100"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "20vw" }}
      alignItems="stretch"
    >
      <Todo />
    </VStack>
  );
};

export default TodoList;
