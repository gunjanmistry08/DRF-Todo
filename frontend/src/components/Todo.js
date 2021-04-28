import { IconButton } from "@chakra-ui/button";
import { Spacer, Text } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { FaTrash } from "react-icons/fa";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <HStack>
      <Text>{todo.title}</Text>
      <Spacer />
      <IconButton
        icon={<FaTrash />}
        isRound="true"
        onClick={() => deleteTodo(todo.id)}
      />
    </HStack>
  );
};

export default Todo;
