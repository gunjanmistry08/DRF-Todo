import { StackDivider } from "@chakra-ui/layout";
import { Badge } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  if (todos.length < 1) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No Todos, yay!!!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="blue.700"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "20vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </VStack>
  );
};

export default TodoList;
